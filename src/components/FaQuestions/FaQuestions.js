import React from "react";

const FaQuestions = () => {
  return (
    <section className="bg-gray-800 text-gray-100 min-h-screen py-10">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-400">
          We get asked a lot of questions, so we thought the easiest thing to do
          would be to compile them in a quick and easy FAQ.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              what is cors?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Cross-origin resource sharing (CORS) is a browser mechanism which
              enables controlled access to resources located outside of a given
              domain. It extends and adds flexibility to the same-origin policy
              (SOP). However, it also provides potential for cross-domain
              attacks, if a website's CORS policy is poorly configured and
              implemented. CORS is not a protection against cross-origin attacks
              such as cross-site request forgery (CSRF).
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Why are you using firebase? What other options do you have to
              implement authentication?{" "}
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Firebase Authentication aims to make building secure
              authentication systems easy, while improving the sign-in and
              onboarding experience for end users. It provides an end-to-end
              identity solution, supporting email and password accounts, phone
              auth, and Google, Twitter, Facebook, and GitHub login, and more.
              <span className="mt-3 text-gray-200">
                User Authentication Platforms [Auth, Firebase Alternatives]
              </span>
              <li>STYTCH</li>
              <li>Supabase</li>
              <li>Okta</li>
              <li>Frontegg</li>
              <li>Authress</li>
              <li>OneLogin</li>
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does the private route work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in)
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is Node? How does Node work?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Node.js is a JavaScript runtime environment that achieves low
              latency and high throughput by taking a “non-blocking” approach to
              serving requests. In other words, Node.js wastes no time or
              resources on waiting for I/O requests to return. <br /> <br />
              <span className="text-gray-300">
                Node is completely event-driven. Basically the server consists
                of one thread processing one event after another. A new request
                coming in is one kind of event. The server starts processing it
                and when there is a blocking IO operation, it does not wait
                until it completes and instead registers a callback function
              </span>
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaQuestions;
