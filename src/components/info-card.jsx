import { Card } from "flowbite-react";

export default function Component() {
  return (
    <Card className="max-w-lg backdrop-blur-sm bg-white/60 border-none">
      <div className="flex justify-start p-2"></div>
      <div className="flex flex-col items-center pb-2">
        <img
          alt="Nhi Hoang"
          src="/images/cute-avatar.png" 
          width="120"
          className="m-1 rounded-full shadow-lg"
        />
        <h5 className="mt-3 mb-1 text-2xl font-medium text-teal dark:text-white">
          Nhi Hoang
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Front End Developer
        </span>
        <p className="text-sm mt-2 p-0 text-justify"> 
          Hey there! 👋 I'm a passionate explorer of life's wonders and a
          perpetual dreamer. By day, you'll find me immersed in the world of
          code, bringing digital ideas to life. By night, I transform into a
          cosmic thinker, stargazing and pondering the mysteries of the
          universe. My heart beats to the rhythm of creativity, fueled by coffee
          and the occasional bout of wanderlust. 
        </p>
        <div className="flex space-x-2 lg:mt-6">
          <a
            href="https://www.linkedin.com/"
            className="inline-block rounded-full bg-yellow p-2.5 text-white hover:bg-teal dark:bg-blue dark:hover:bg-yellow dark:focus:ring-blue"
            >
            <img src="./public/images/linkedin-icon.svg" alt="linkedin" width="15" className="mx-auto"></img>
          </a>
          <a
            href="https://github.com/eviehoang/"
            className="inline-block rounded-full bg-darkblue p-2.5 text-center text-sm font-medium text-white hover:bg-blue dark:bg-blue dark:hover:bg-yellow dark:focus:ring-blue"
          >
            <img src="./public/images/github-icon.svg" alt="linkedin" width="15" className="mx-auto"></img>
          </a>
        </div>
      </div>
    </Card>
  );
}
