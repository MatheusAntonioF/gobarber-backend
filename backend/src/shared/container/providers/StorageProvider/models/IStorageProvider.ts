export default interface IStorageProvider {
  saveFile(fale: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
