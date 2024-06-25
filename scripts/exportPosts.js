const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BASE_DIRECTORY = path.join(process.cwd(), 'db/posts');
const LANGUAGES = ['en', 'ja']; // Add more languages as needed
const OUTPUT_DIRECTORY = path.join(process.cwd(), 'db');

const getAllPosts = (language) => {
  const CONTENT_DIRECTORY = path.join(BASE_DIRECTORY, language);
  const filenames = fs.readdirSync(CONTENT_DIRECTORY).filter(filename => filename.endsWith('.mdx'));
  
  return filenames.map(filename => {
    const filePath = path.join(CONTENT_DIRECTORY, filename);
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(rawContent);
    const { date, description, title } = data;

    return {
      content,
      date,
      description,
      slug: filename.replace('.mdx', ''),
      title
    };
  });
};

// Function to generate JSON file for each language
const generateJsonFile = (language, posts) => {
  const OUTPUT_FILE = path.join(OUTPUT_DIRECTORY, `${language}.json`);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  console.log(`文章导出到: ${OUTPUT_FILE}`);
};

// Loop through each language and generate JSON file
LANGUAGES.forEach(language => {
  const posts = getAllPosts(language);
  generateJsonFile(language, posts);
});
