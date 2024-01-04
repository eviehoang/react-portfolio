import { Card } from "flowbite-react";

export default function Component() {
  const htmlPercent = 92;
  const cssPercent = 85;
  const javaPercent = 80;
  const reactPercent = 85;

  return (
    <Card className="flex flex-col w-80">
      <div className="items-center">
        <h1 className="text-3xl text-center pt-0 text-darkblue mb-3">Skills</h1>
        <div className="flex justify-between mb-1 w-full gap-0">
          <span className="text-base font-medium text-blue dark:text-white">
            HTML
          </span>
          <span className="text-sm font-medium text-blue dark:text-white">
            {htmlPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-yellow h-2.5 rounded-full"
            style={{ width: `${htmlPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue dark:text-white">
            CSS
          </span>
          <span className="text-sm font-medium text-blue dark:text-white">
            {cssPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-blue h-2.5 rounded-full"
            style={{ width: `${cssPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue dark:text-white">
            Javascript
          </span>
          <span className="text-sm font-medium text-blue dark:text-white">
            {javaPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-yellow h-2.5 rounded-full"
            style={{ width: `${javaPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-blue dark:text-white">
            React
          </span>
          <span className="text-sm font-medium text-blue dark:text-white">
            {reactPercent}%
          </span>
        </div>
        <div className="w-full bg-darkblue rounded-full h-2.5 dark:bg-blue mb-4">
          <div
            className="bg-blue h-2.5 rounded-full"
            style={{ width: `${reactPercent}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
}
