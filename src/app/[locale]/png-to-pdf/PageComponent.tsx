export const runtime = 'edge';
const PageComponent = ({
  locale,
  indexLanguageText,
  renderedContent
}: { locale: any; indexLanguageText: any; renderedContent: any }) => {
  return (
    <div className='p-32'>
      <time className="block italic text-gray-500">2-24-10-09</time>
      <h1 className="text-4xl font-bold pb-6 border-b mb-10">
        测试标题
      </h1>
      {renderedContent}
    </div>
  );
};

export default PageComponent;
