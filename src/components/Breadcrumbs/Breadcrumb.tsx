import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-lg font-normal text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-normal"  href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-normal text-blue-800">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
