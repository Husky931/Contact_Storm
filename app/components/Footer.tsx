export default function Footer() {
    return (
        <footer className="bg-primary-main text-white">
            <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl leading-tight font-bold md:text-3xl lg:text-4xl">
                            Your trusted Digital Transformation Consultancy in
                            China & Asia
                        </h2>
                        <button className="bg-primary-main hover:bg-primary-navy/90 rounded-md px-6 py-3 text-sm font-semibold text-white transition-colors md:px-8 md:py-4 md:text-base">
                            Contact Us
                        </button>
                        <p className="text-xs text-white md:text-sm">
                            沪ICP备12045089号-2
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-sm leading-relaxed md:text-base">
                                Subscribe to our{" "}
                                <strong>Monthly Newsletter</strong> & enjoy
                                exclusive content about the Chinese Digital
                                Ecosystem.
                            </p>
                            <a
                                href="#"
                                className="inline-block text-sm font-bold transition-opacity hover:opacity-80 md:text-base"
                            >
                                Subscribe Here &gt;
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4">
                            {/* WeChat Icon */}
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                aria-label="WeChat"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="fill-primary-red-dark h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.597-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-2.455 0-4.515 1.893-4.84 4.396-.002.012-.002.024-.002.036 0 .012 0 .024.002.036.325 2.503 2.385 4.396 4.84 4.396a4.888 4.888 0 0 0 2.613-.74.59.59 0 0 1 .636-.022l1.658.969a.295.295 0 0 0 .29-.001.295.295 0 0 0 .14-.245.295.295 0 0 0-.048-.159l-.39-1.478a.59.59 0 0 1 .226-.665c1.704-1.28 2.78-3.18 2.78-5.31 0-2.503-2.01-4.533-4.487-4.533zm-2.613 4.533a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm2.613 0a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178z" />
                                </svg>
                            </a>

                            {/* LinkedIn Icon */}
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                aria-label="LinkedIn"
                            >
                                <span className="text-primary-red-dark text-lg font-bold">
                                    in
                                </span>
                            </a>

                            {/* Facebook Icon */}
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                aria-label="Facebook"
                            >
                                <span className="text-primary-red-dark text-lg font-bold">
                                    f
                                </span>
                            </a>

                            {/* YouTube Icon */}
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-90"
                                aria-label="YouTube"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="fill-primary-red-dark h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
