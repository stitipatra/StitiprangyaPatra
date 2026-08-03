import { useParams } from "react-router";

function ProjectDetailPage() {
  const { projectSlug } = useParams();

  return <h1>Project: {projectSlug}</h1>;
}

export default ProjectDetailPage;