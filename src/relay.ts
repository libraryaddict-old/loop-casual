import { print, write } from "kolmafia";
import {
  ComponentSetting,
  generateHTML,
  RelayComponent,
  RelayComponentType,
  RelayPage,
} from "mafia-shared-relay";
import { args } from "./args";

interface ArgSpec<T> {
  key?: Exclude<string, "help">;
  help?: string;
  options?: [T, string?][];
  setting?: string;
  hidden?: boolean;
  default: T;
}

function convertArgsToHtml(): RelayPage {
  const settings: RelayComponent[] = [];

  for (const ss of Object.getOwnPropertySymbols(args)) {
    const v = (args as any)[ss];

    if (typeof v !== "object") continue;

    for (const [key, data] of Object.entries(v) as [string, ArgSpec<any>][]) {
      if (data.setting === "" || data.hidden) continue;

      const setting: ComponentSetting = {
        type: RelayComponentType.STRING,
        description: data.help || "No Description Provided",
        preference: `loopcasual_${key}`,
        default: data.default ? data.default.toString() : undefined,
      };

      if (typeof data.default === "boolean") {
        setting.type = RelayComponentType.BOOLEAN;
      } else if (data.options !== undefined) {
        setting.type = RelayComponentType.DROPDOWN;
        setting.dropdown = data.options.map(([k, desc]) => {
          return { display: desc, value: k };
        });
      }

      settings.push(setting);
    }
  }

  return { page: "loopcasual", components: settings };
}

export function main() {
  write(generateHTML([convertArgsToHtml()]));
}
