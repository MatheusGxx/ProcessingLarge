import { log, error } from "node:console";
import { Readable } from "node:stream";
import ReadLine from "node:readline";

/**
 *
 * @param {string} fileS3 - Caminho do Arquivo que esta no S3...
 */

export const fileProcessing = (fileS3: string) => {
  try {
    return "ok";
  } catch (err: any) {
    return error("Ops ocorreu um erro ao processar o arquivo...");
  }
};
