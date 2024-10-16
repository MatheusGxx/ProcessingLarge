import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { log } from 'node:console'

export const fileURL = () => {
  try{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, '10_milhoes_linhas.txt')
    return filePath
  }catch(err:any){
    log('Ocorreu um erro ao buscar a URL do arquivo...')
  }
}