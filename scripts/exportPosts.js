const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BASE_CONTENT_DIRECTORY = path.join(process.cwd(), 'content');
const OUTPUT_DIRECTORY = path.join(process.cwd(), 'content');

const getAllPostsByLanguage = () => {
  // 扫描 content 文件夹下所有的语言文件夹
  const languageFolders = fs.readdirSync(BASE_CONTENT_DIRECTORY)
    .filter(folder => !folder.startsWith('.')); // 排除以点开头的文件/文件夹，比如 .DS_Store
  
  // 遍历每个语言文件夹，处理其中的 .mdx 文件
  languageFolders.forEach(language => {
    const languageDirectory = path.join(BASE_CONTENT_DIRECTORY, language);

    const filenames = fs.readdirSync(languageDirectory)
      .filter(filename => filename.endsWith(`.${language}.mdx`));
    
    const posts = filenames.map(filename => {
      const filePath = path.join(languageDirectory, filename);
      const rawContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(rawContent);
      const { date, description, title } = data;

      return {
        content,
        date,
        description,
        slug: filename.replace(`.${language}.mdx`, ''),
        title
      };
    });

    const outputFilePath = path.join(OUTPUT_DIRECTORY, `${language}.json`);
    fs.writeFileSync(outputFilePath, JSON.stringify(posts, null, 2));
    console.log(`Posts exported to: ${outputFilePath}`);
  });
};

getAllPostsByLanguage();
