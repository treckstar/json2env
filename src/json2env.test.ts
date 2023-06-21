import * as fs from 'fs';
import { Json2Env } from './json2env';

jest.mock('fs');

describe('Json2Env', () => {
  const mockedFs = fs as jest.Mocked<typeof fs>;

  // beforeEach(() => {
  //   mockedFs.readFileSync.mockReset();
  //   mockedFs.writeFileSync.mockReset();
  // });

  test('should convert JSON to .env file', () => {
    // const jsonData = JSON.stringify({
    //   KEY1: 'value1',
    //   KEY2: 'value2',
    // });

    // mockedFs.readFileSync.mockReturnValueOnce(jsonData);

    // Json2Env({  inputFilename: 'env.json', outputFilename: '.env' });

    // Json2Env({  inputFilename: '2env.json', outputFilename: '.env' });

    // expect(mockedFs.readFileSync).toHaveBeenCalledWith(
    //   'env.json',
    //   'utf8'
    // );

    // expect(mockedFs.writeFileSync).toHaveBeenCalledWith(
    //   '.env',
    //   'KEY1=value1\nKEY2=value2\n'
    // );

    // expect(console.log).toHaveBeenCalledWith(
    //   '.env file created successfully!'
    // );
  });

  // test('should handle errors during conversion', () => {
  //   const errorMessage = 'File read error';
  //   mockedFs.readFileSync.mockImplementationOnce(() => {
  //     throw new Error(errorMessage);
  //   });

  //   const options = {
  //     inputFilename: 'fail.jsons',
  //     outputFilename: '.fail',
  //   };

  //   expect(() => {
  //     Json2Env(options);
  //   }).toThrowError('Error converting JSON to .env file: ' + errorMessage);
  // });
});