import {
  Box,
  Container,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

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

type BSB_TeamProps = {
  teamGrid: GridProps[];
  nameColor: string;
  roleColor: string;
  departmentColor: string;
};

const BSB_Team: React.FC<BSB_TeamProps> = ({ teamGrid, nameColor, roleColor, departmentColor }) => {
  interface TeamMemberProps {
    imageSrc: string;
    name: string;
    role: string;
    department: string;
  }

  const TeamMember: React.FC<TeamMemberProps> = ({
    imageSrc,
    name,
    role,
    department,
  }) => {
    return (
      <Box sx={{ padding: 2, height: 300, borderRadius: 8 }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={"column"}
          sx={{ userSelect: "none" }}
        >
          <img
            src={imageSrc}
            style={{
              borderRadius: "50%",
              width: 150,
              height: 150,
              objectFit: "cover",
            }}
            alt={`${name}`}
            draggable={"false"}
          />
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Typography fontSize={20} color={nameColor}>
              <strong>{name}</strong>
            </Typography>
            <Typography
              fontSize={15}
              sx={{
                color: roleColor,
              }}
            >
              {role}
            </Typography>
            <Typography
              fontSize={13}
              sx={{
                color: departmentColor,
                wordBreak: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
              {department}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 25 }} color={nameColor}>
          <strong>Unser Team</strong>
        </Typography>
        <Divider sx={{ bgcolor: nameColor, width: "50%", mb: 5, mt: 2 }} />

        <Grid2
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          columns={{ xs: 3, sm: 3, md: 3, lg: 5 }}
        >
          {teamGrid.map((grid, index) => (
            <Grid2
              size={{
                xs: grid.size.xs,
                sm: grid.size.sm,
                md: grid.size.md,
                lg: grid.size.lg,
              }}
              key={index}
            >
              {grid.member && (
                <TeamMember
                  imageSrc={grid.member.imageSrc}
                  name={grid.member.name}
                  role={grid.member.role}
                  department={grid.member.department}
                />
              )}
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default BSB_Team;
