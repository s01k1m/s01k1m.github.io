import path from 'path'
import { promises as fsPromises } from 'fs'

// Function to read JSON file
export async function readJsonFile(filePath) {
  // Get the path of the json file
  const myPath = path.join(process.cwd(), filePath)
  try {
    // Read the json file
    const jsonData = await fsPromises.readFile(myPath, 'utf-8')
    // Parse data as json
    return JSON.parse(jsonData)
  } catch (error) {
    console.error('Error reading JSON file:', error)
    return null
  }
}
