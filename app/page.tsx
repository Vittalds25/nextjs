import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          

           1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each. 
           Ans: 
            5 most favourite –
            1.Respond to 25+ support requests via email every day.- I love to get to know issues and their root causes, if we have more tickets the probability of getting new issues are more and that would help me gain more knowledge and skills.
            2.Dig through logs to troubleshoot a customer's broken project. - I always prefer to fix the issue myself by going through the logs and knowing what might have caused the issue, for instance if the user has made some mistakes that led to and error we would easily get those on logs and update the user on the same.
            3.Write and maintain support articles and docs pages. - This is a very important and useful task which would reduce our burden in training the new recruits or adding this as a self assist document for the users.
            4.Analyze hundreds of support tickets to spot trends the product team can use - This is a very helpful task that would help us in reducing the tickets flow. If we are getting similar tickets that means the product is not built in a user friendly way and we would have to get this to product team and have them work on it.
            5.Work with engineering teams during incidents and provide updates to internal and external stakeholders. - This is very important task as the user will be waiting for an update, imagining myself in the place of the user I would want some solution right away and if I get to connect with the right person then I would be able to help the user ASAP.

            5 least favourite support tasks –
            1.Manage a support team – I’m not that good enough yet to manage a support team, I love to work on issues and concentrate more on the tickets and the tasks given to me.
            2.Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems. - This would make the user think that there are more issues. I prefer to have a private discussion with the user unless we are discussing the same issue with all the users.
            3.Find and recruit teammates for the support team - I would love to take interviews an recruit teammates but this would be my least priority.
            4.Help train and onboard new support teammates - This will be helpful for both the new joinee and me but I prefer to build confluences which would help the new joinee learn just by referring to it so it saves both of our time.
            5.Work with the product team to develop a new feature based on feedback from customers. - I prefer more to work on issues than enhancement requests as the issues are the ones on which the customer is still blocked on.



            2. What do you want to learn or do more of at work?
            Ans: I would love to learn next.js more and have more knowledge on it so that I can become a key resource who can help users with their questions and issues.
            I’m very interested in learning new things and overcoming hurdles.



            3. Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful? 
            Ans: We had a user reach out to us with a problem stating that he was not able to get a link generated so that he can share it to the customer. I tried to replicate the issue on my end with the network tab open then I took the trace id and fetched the logs for it, I found out that customer address was missing which caused the link to not be generated.
            I updated the user on the same and also created a jira for our engineering team to make sure they make the field mandatory so the user doesn’t forget to add that.

            4. When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
            Ans: 
            Use Edge Functions for lightweight tasks that benefit from lower latency.
            Use Serverless Functions for dynamic server-side logic or backend processing without managing servers.
            Use Edge Middleware for customising request/response handling or implementing complex transformations closer to the user.

            5. Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better? 

            Ans: I would ask the customer to share the framework details that he is using and I would ask my teammates if they have worked on any such issues. If not I would search if we have any documentation on it. If I don't get any lead on it then I would reach out to our engineering team to know more or schedule a meeting with the customer and engineering team to go over the issue.

            6. The customer from question 5 replies to your response with the below: “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.” Please write a follow-up reply to the customer. 

            Ans: - “Sorry for your inconvenience, I will have this escalated and schedule a meeting right away with you and our engineering team who are well versed with the issue. They would help you on this”.

            7. A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply. 

            Ans: - 
            I would refer to the articles added and try to see if I can find the right one.
            Then I would share the link for the customer to go over it and get back to us if they have any questions.

            8. A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.

            Ans: - I would refer to the articles created on this and see if there is anything the customer has to do to make sure that it is not indexed by search engines. If that is possible then I would give him the steps for the same if not I would say that we don't have that functionality and raise an enhancement request to our product team.


            9. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term? 

           Ans: - I would think they would face deployment problems. 
           Short-term – Sending out mass communication for the users on the articles which helps with deployment problems.
           Long term – To overcome these problems we can set up a self assist portal so that the users can go there and select which error they are getting and see what is the solution for it.


           10. How could we improve or alter this familiarisation exercise?

           Ans : - 1.Creating articles from a user perspective, keeping in mind the issues that they might come across. Create some multimedia content such as video tutorials, interactive quizzes, or visual guides to cater to diverse learning styles and enhance engagement.
           Implementing a feedback mechanism to gather input from customers about their experience with the exercise.

          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
