import { isBoolean, isObject, isString } from "https://deno.land/x/documentaly/utilities/mod.ts";

type CommandLineArgument = {
  helpFlag: boolean; // -h
  filePath: string;
  notionAuth: string; // -a
};

/** validate command line argument */
function validateCommandLineArgument(input: unknown) {
  const baseConfig: CommandLineArgument = {
    helpFlag: false,
    filePath: '',
    notionAuth: '',
  };

  if (!isObject(input)) {
    throw new Error();
  }

  if (
    "_" in input && Array.isArray(input._)
  ) {
    const [filePath] = input._;
    if (!filePath || !isString(filePath)) {
      throw Error('invalid argument')
    }
    baseConfig.filePath = filePath;
  }

  baseConfig.helpFlag = "h" in input && isBoolean(input.h) ? input.h : false;
  if (!("a" in input) || !isString(input.a)) {
    throw Error('invalid argument')
  }
  baseConfig.notionAuth = input.a;

  return baseConfig;
}

export { validateCommandLineArgument };
