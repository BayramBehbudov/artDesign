import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
   title: 'Курсы',
   description: 'Страница доступных курсов',
}

const Courses: NextPage = (): JSX.Element => {
   return <main>Courses Page</main>
}

export default Courses
