// module.exports = {
//   reactStrictMode: true,
// }
const withTM = require('next-transpile-modules')(['reactstrap-formik']);

// module.exports = withTM({ reactStrictMode: true,});
module.exports = withTM({
     reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/about_us',
          destination: '/about-us',
          permanent: true,
        },
        {
            source: '/contact_us',
            destination: '/contact-us',
            permanent: true,
          },
          {
            source: '/resources/testseries',
            destination: '/resources/online-test-series',
            permanent: true,
          },
          {
            source: '/teacher_registration',
            destination: '/teacher-registration',
            permanent: true,
          },
          {
            source: '/courses/jeemain',
            destination: '/courses/iit-jee',
            permanent: true,
          },
          {
            source: '/courses/mht_cet',
            destination: '/courses/mht-cet',
            permanent: true,
          },
          {
            source: '/courses/neetmain',
            destination: '/courses/neet',
            permanent: true,
          },
          {
            source: '/student_registration',
            destination: '/student-registration',
            permanent: true,
          },
          {
            source: '/resources/weeklytest',
            destination: '/resources/free-weekly-test-series',
            permanent: true,
          },
      ]
    },
  })