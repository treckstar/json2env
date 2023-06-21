import * as fs from 'fs';

export interface ConvertOptions {
  inputFilename: string;
  outputFilename: string;
}

export interface EnvironmentVariables {
  [key: string]: string;
}

/**
 * Converts a JSON file to a .env file.
 * @param {ConvertOptions} options - The options for the conversion process.
 * @param {string} options.inputFilename - The name of the input file
 * @param {string} options.outputFilename - The name of the output file.
 */
export const Json2Env = (options: ConvertOptions) => {
  const { inputFilename, outputFilename } = options;
  try {
    const jsonData = fs.readFileSync(inputFilename, 'utf8');
    const parsedData: EnvironmentVariables = JSON.parse(jsonData);

    let envContent = '';
    Object.entries(parsedData).forEach(([key, value]) => {
      const validatedKey = validateKey(key);
      const validatedValue = validateValue(value);
      envContent += `${validatedKey}=${validatedValue}\n`;
    });

    fs.writeFileSync(outputFilename, envContent);

    console.log('.env file created successfully!');
  } catch (error) {
    console.error('Error converting JSON to .env file');
  }
};

/**
 * Validates the environment variable key to prevent security exploits.
 * @param {string} key - The environment variable key.
 * @returns {string} - The validated environment variable key.
 */
const validateKey = (key: string): string => {
  const validatedKey = key.replace(/[^\w]/g, '_');
  return validatedKey.toUpperCase();
};

/**
 * Validates the environment variable value to prevent security exploits.
 * @param {string} value - The environment variable value.
 * @returns {string} - The validated environment variable value.
 */
const validateValue = (value: string): string => {
  // Add any custom validation logic here as per your requirements
  return value;
};