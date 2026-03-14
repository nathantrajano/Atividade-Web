/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Professor = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Disciplina", accessor: "disciplina", align: "left" },
      { Header: "Professor", accessor: "professor", align: "left" },
      { Header: "Créditos", accessor: "creditos", align: "center" },
      { Header: "Período", accessor: "periodo", align: "center" },
    ],

    rows: [
      {
        disciplina: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Engenharia de Software
          </MDTypography>
        ),
        professor: (
          <Professor image={team2} name="Prof. Ana Rodrigues" email="ana.rodrigues@pw.com.br" />
        ),
        creditos: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2026.1
          </MDTypography>
        ),
      },
      {
        disciplina: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Banco de Dados Avançado
          </MDTypography>
        ),
        professor: (
          <Professor
            image={team3}
            name="Prof. Carlos Nascimento"
            email="carlos.nascimento@pw.com.br"
          />
        ),
        creditos: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2026.1
          </MDTypography>
        ),
      },
      {
        disciplina: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Desenvolvimento Web Full Stack
          </MDTypography>
        ),
        professor: (
          <Professor image={team4} name="Prof. Fernanda Lima" email="fernanda.lima@pw.com.br" />
        ),
        creditos: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        periodo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2026.1
          </MDTypography>
        ),
      },
    ],
  };
}
