const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIRECTORY = path.join(process.cwd(), 'db/posts');
const OUTPUT_FILE = path.join(process.cwd(), 'db/posts.json');

const getAllPosts = () => {
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

const posts = getAllPosts();
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));

console.log('文章导出到:', OUTPUT_FILE);