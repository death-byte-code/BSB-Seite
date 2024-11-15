import { Box, Container } from "@mui/material";
import BSB_Tiles from "./BSB_Tiles";
import BSB_Team from "./BSB_Team";
import BSB_News from "./BSB_News";
import BSB_DepartmentImage from "./BSB_DepartmentImage";

type TeamMemberProps = {
  imageSrc: string;
  name: string;
  role: string;
  department: string;
};

type GridSize = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
};

type GridProps = {
  size: GridSize;
  member?: TeamMemberProps;
};

type BSB_Props = {
  teamGrid: GridProps[];
  text: React.ReactNode;
  boxColor: string;
  imagePath: string;
  imageText: string;
};

const SubPageLayout: React.FC<BSB_Props> = ({
  teamGrid,
  text,
  boxColor,
  imagePath,
  imageText,
}) => {
  return (
    <Box>
      <Box>
        <BSB_DepartmentImage imagePath={imagePath} imageText={imageText} />
      </Box>
      <Box sx={{ p: 5 }}>
        <BSB_Tiles />
      </Box>
      <Box sx={{ pb: 5 }}>
        <Container>
          <Box>{text}</Box>
        </Container>
      </Box>
      <Box bgcolor={boxColor} sx={{ p: 5 }}>
        <BSB_Team teamGrid={teamGrid} />
      </Box>
      <Box sx={{ p: 5 }}>
        <BSB_News />
      </Box>
    </Box>
  );
};

export default SubPageLayout;
