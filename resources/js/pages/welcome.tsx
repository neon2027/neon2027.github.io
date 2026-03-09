import { Head } from '@inertiajs/react';
import NavigationBar from '@/components/navigation-bar';

export default function Welcome() {

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
                <NavigationBar />
                <div className={'py-12'}>
                    <code className={'space-y-4'}>
                        <p className={'text-2xl font-bold'}>
                            Hi I'm Exequiel Lustan
                        </p>
                        <p>
                            I am currently in a Computer Program in Bicol
                            University, building a web application and being
                            part of a big project of my office is iBU Student
                            Information System that includes admission, medical
                            appointments, student registrations, reports,
                            accounting, payment and finance. My team is using
                            <b> TALL stack</b> as our techstack in the
                            development team. Handling those projects helps me
                            improve my skills and character throughout my
                            journey
                        </p>

                        <p>
                            I love to learn new things and I am always looking
                            for new opportunities to grow and learn. I am
                            currently looking for a full-time position as a
                            Software Engineer.
                        </p>
                        <hr />
                        <h1 className={'font-bold'}>
                            Projects that I am part of...
                        </h1>

                        <div className={'grid grid-cols-3 gap-4'}>
                            <div className={'border p-4 shadow-md'}>
                                <h2 className={'font-bold'}>
                                    BU-ICTO Service Request System
                                </h2>
                                <p>
                                    A web application that helps IT staff manage
                                    service requests and track their progress.
                                </p>
                                <a
                                    className={
                                        'font-bold text-blue-500 hover:underline'
                                    }
                                    href={'https://icto.bicol-u.edu.ph'}
                                    target={'_blank'}
                                >
                                    https://icto.bicol-u.edu.ph
                                </a>
                            </div>
                            <div className={'border p-4 shadow-md'}>
                                <h2 className={'font-bold'}>
                                    iBU Student Information System
                                </h2>
                                <p>
                                    A web application that helps students manage
                                    their academic records, manage their medical
                                    appointments, and manage their finances.
                                </p>
                                <a
                                    className={
                                        'font-bold text-blue-500 hover:underline'
                                    }
                                    href={'https://ibu.bicol-u.edu.ph'}
                                    target={'_blank'}
                                >
                                    https://ibu.bicol-u.edu.ph
                                </a>
                            </div>
                            <div className={'border p-4 shadow-md'}>
                                <h2 className={'font-bold'}>
                                    Clientele Satisfaction Measurement System
                                    (iBU CSM)
                                </h2>
                                <p>
                                    A web application that helps clients measure
                                    their satisfaction with the services
                                    provided by the company and ARTA (Anti-Red
                                    Tape Association) is support the application
                                </p>
                                <a
                                    className={
                                        'font-bold text-blue-500 hover:underline'
                                    }
                                    href={'https://survey.bicol-u.edu.ph'}
                                    target={'_blank'}
                                >
                                    https://survey.bicol-u.edu.ph
                                </a>
                            </div>
                        </div>

                        <div className={'space-y-4'}>
                            <h1 className={'font-bold'}>
                                I do side hustles like...
                            </h1>
                            <p>
                                I do tutoring for other that wants to learn
                                programming, I also do freelance work for
                                companies that want to build their website or
                                mobile application. I also do some freelance
                                work for companies that want to build their
                                website or mobile application.
                            </p>
                        </div>
                        <hr />
                        <h1 className={'font-bold'}>Technical Skills...</h1>

                        <div
                            className={
                                'border p-4 text-center font-bold shadow-md'
                            }
                        >
                            Front-End Skills
                        </div>

                        <div
                            className={
                                'flex flex-wrap justify-center gap-4 *:transition-transform *:duration-300 *:hover:-translate-y-1 *:hover:shadow-xl'
                            }
                        >
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>Tailwind CSS</p>
                                <small>Intermediate</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>Alpine JS</p>
                                <small>Advanced</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>React JS</p>
                                <small>Beginner</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>Boostrap</p>
                                <small>Intermediate</small>
                            </div>
                        </div>

                        <div
                            className={
                                'border p-4 text-center font-bold shadow-md'
                            }
                        >
                            Back-End Skills
                        </div>

                        <div
                            className={
                                'flex flex-wrap justify-center gap-4 *:transition-transform *:duration-300 *:hover:-translate-y-1 *:hover:shadow-xl'
                            }
                        >
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>
                                    PHP Programming Language
                                </p>
                                <small>Intermediate</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>
                                    Laravel 9+ Framework
                                </p>
                                <small>Advanced</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>
                                    Filament Framework
                                </p>
                                <small>Advanced</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>
                                    Livewire 4+ Framework
                                </p>
                                <small>Advanced</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>MySQL</p>
                                <small>Intermediate</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>PostgreSQL</p>
                                <small>Beginner</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>Redis Caching</p>
                                <small>Beginner</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>Mailing System</p>
                                <small>Intermediate</small>
                            </div>
                            <div className={'border px-4 py-2'}>
                                <p className={'font-bold'}>
                                    AWS Elastic Computing 2
                                </p>
                                <small>Intermediate</small>
                            </div>
                        </div>
                        <hr />
                        <div className={'space-y-4'}>
                            <h2 className={'font-bold'}>Certifications...</h2>
                            <div>
                                <p className={'font-bold'}>Google AI</p>
                                <p>February, 2026</p>
                            </div>
                            <div>
                                <p className={'font-bold'}>
                                    Electronic Data Processing Specialist
                                    Eligibility (EDPSE)
                                </p>
                                <p>November, 2023</p>
                            </div>
                        </div>
                        <hr />
                        <div className={'space-y-4'}>
                            <h2 className={'font-bold'}>Education...</h2>
                            <div>
                                <p className={'font-bold'}>
                                    Master in Information System
                                </p>
                                <p>Bicol University, 2025 - Present</p>
                            </div>
                            <div>
                                <p className={'font-bold'}>
                                    Bachelor of Science in Computer Science
                                </p>
                                <p>Bicol University, 2018-2022</p>
                            </div>

                            <div>
                                <p className={'font-bold'}>
                                    Information Technology, Mobile Application &
                                    Web Development
                                </p>
                                <p className={'italic'}>Technical-Vocational</p>
                                <p>STI College Legazpi, 2016-2018</p>
                            </div>
                        </div>

                        <div className={'space-y-4 bg-gray-800 p-4 text-white'}>
                            <h2 className={'font-bold'}>
                                Contact Information...
                            </h2>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className={'pr-4'}>
                                                <p className={'font-bold'}>
                                                    Email:
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <a
                                                        href={'mailto:'}
                                                        className={
                                                            'hover:underline'
                                                        }
                                                    >
                                                        lustanexequiel@gmail.com
                                                    </a>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={'pr-4'}>
                                                <p className={'font-bold'}>
                                                    Phone Number:
                                                </p>
                                            </td>
                                            <td>
                                                <p>(+63) 993-660-9264</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={'pr-4'}>
                                                <p className={'font-bold'}>
                                                    Current Address:
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    Binitayan, Daraga, Albay,
                                                    Bicol Region, Philippines
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </code>
                </div>
            </div>
        </>
    );
}
