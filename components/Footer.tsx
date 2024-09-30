'use client';

import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setSubmitted(true);
            setError('');
            setEmail(''); // Clear input after submission
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <footer className="bg-[#051A39] text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-7 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">
                    <div className="text-white text-3xl font-bold">
                        JSR FINTECH
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5">
                        <div className="col-span-2">
                            <h2 className="text-2xl font-bold text-white">
                                Get the latest news!
                            </h2>
                            <p className="mt-4 text-white">
                                Stay updated with the latest fintech trends and insights.
                            </p>
                            {submitted && (
                                <p className="mt-4 text-green-400">
                                    Thank you for subscribing!
                                </p>
                            )}
                            {error && (
                                <p className="mt-4 text-red-500">
                                    {error}
                                </p>
                            )}
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                            <form className="w-full" onSubmit={handleSubmit} noValidate>
                                <label htmlFor="UserEmail" className="sr-only">
                                    Enter your email
                                </label>
                                <div className="border border-gray-800 p-2 focus-within:ring focus-within:ring-teal-500 sm:flex sm:items-center sm:gap-4">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="john@example.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm text-black p-2 rounded-md"
                                        aria-invalid={!!error}
                                    />
                                    <button
                                        type="submit"
                                        className="mt-1 w-full bg-[#D42D35] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center border-t border-gray-100 pt-8">
                    <p className="text-sm text-white text-center">
                        &copy; 2024 JSR FINTECH. All rights reserved.
                    </p>

                    <div className="flex space-x-6 mt-4">
                        <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-teal-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" aria-label="Twitter" className="hover:text-teal-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-teal-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
