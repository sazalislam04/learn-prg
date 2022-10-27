import React from "react";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="min-h-screen">
        <div className="container w-full px-6 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-400">
                <h3 className="text-3xl font-semibold text-white">LEARNPRg</h3>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  Education & Courses
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                  <h3 className="text-xl font-semibold text-white tracking-wide uppercase">
                    what is cors?
                  </h3>
                  <p className="mt-3 text-gray-400 leading-[1.6]">
                    Cross-origin resource sharing (CORS) is a browser mechanism
                    which enables controlled access to resources located outside
                    of a given domain. It extends and adds flexibility to the
                    same-origin policy (SOP). However, it also provides
                    potential for cross-domain attacks, if a website's CORS
                    policy is poorly configured and implemented. CORS is not a
                    protection against cross-origin attacks such as cross-site
                    request forgery (CSRF).
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                  <h3 className="text-xl text-white font-semibold tracking-wide uppercase">
                    Why are you using firebase? What other options do you have
                    to implement authentication?
                  </h3>

                  <p className="mt-3 text-gray-400 leading-[1.6]">
                    Firebase Authentication aims to make building secure
                    authentication systems easy, while improving the sign-in and
                    onboarding experience for end users. It provides an
                    end-to-end identity solution, supporting email and password
                    accounts, phone auth, and Google, Twitter, Facebook, and
                    GitHub login, and more. <br />
                    <span className="mt-3 text-gray-200">
                      User Authentication Platforms [Auth, Firebase
                      Alternatives]
                    </span>
                    <li>STYTCH</li>
                    <li>Supabase</li>
                    <li>Okta</li>
                    <li>Frontegg</li>
                    <li>Authress</li>
                    <li>OneLogin</li>
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide text-white">
                    How does the private route work?
                  </h3>
                  <p className="mt-3 text-gray-400 leading-[1.6]">
                    The private route component is similar to the public route,
                    the only change is that redirect URL and authenticate
                    condition. If the user is not authenticated he will be
                    redirected to the login page and the user can only access
                    the authenticated routes If he is authenticated (Logged in)
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide text-white">
                    What is Node? How does Node work?
                  </h3>
                  <p className="mt-3 text-gray-400 leading-[1.6]">
                    Node is completely event-driven. Basically the server
                    consists of one thread processing one event after another. A
                    new request coming in is one kind of event. The server
                    starts processing it and when there is a blocking IO
                    operation, it does not wait until it completes and instead
                    registers a callback function
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
