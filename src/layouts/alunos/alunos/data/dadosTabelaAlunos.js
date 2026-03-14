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
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Aluno = ({ image, name, email }) => (
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
      { Header: "Integrante", accessor: "integrante", width: "45%", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Início", accessor: "inicio", align: "center" },
    ],

    rows: [
      {
        integrante: <Aluno image={team2} name="Gabriel Silva" email="gabriel.silva@pw.com.br" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        inicio: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            01/03/2026
          </MDTypography>
        ),
      },
      {
        integrante: <Aluno image={team3} name="Mariana Costa" email="mariana.costa@pw.com.br" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="ativo" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        inicio: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            05/03/2026
          </MDTypography>
        ),
      },
      {
        integrante: <Aluno image={team4} name="Lucas Almeida" email="lucas.almeida@pw.com.br" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="desativado" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        inicio: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10/03/2026
          </MDTypography>
        ),
      },
    ],
  };
}
