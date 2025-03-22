import fs from "node:fs/promises";
 
import {
  Document,
  MetadataMode,
  NodeWithScore,
  VectorStoreIndex,
} from "llamaindex";
 
async function main() {
  // Load essay from abramov.txt in Node
  const path = "resume.txt";
 
  const essay = await fs.readFile(path, "utf-8");
 
  // Create Document object with essay
  const document = new Document({ text: essay, id_: path });
 
  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments([document]);
 
  // Query the index
  const queryEngine = index.asQueryEngine();
  const { message, sourceNodes } = await queryEngine.query({
    query: "湖山翔平の出身高校はどこですか？",
  });
 
  // Output response with sources
  console.log(message.content);
 
  if (sourceNodes) {
    sourceNodes.forEach((source: NodeWithScore, index: number) => {
      console.log(
        `\n${index}: Score: ${source.score} - ${source.node.getContent(MetadataMode.NONE).substring(0, 50)}...\n`,
      );
    });
  }
}
 
main().catch(console.error);
 
