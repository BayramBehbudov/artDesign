const CourseDetails = ({ params: { title } }: { params: { title: string } }): JSX.Element => {
   return <main>Course ${title}</main>
}

export default CourseDetails
