import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.use(express.json());
app.use(cors());

app.get("/employees", async (req, res) => {
  const getEmployees = await prisma.employee.findMany({
    include: {
      ratings: true,
    },
  });

  return res.status(200).json(getEmployees);
});

app.get("/employees/ratings", async (req, res) => {
  const getEmployees = await prisma.rating.findMany({
    where: {
      whoVoted: "joao.matos@construtorapatriani.com.br",
      employeeEmail: "carlos.alexandre@construtorapatriani.com.br",
    },
  });

  return res.status(200).json(getEmployees);
});

app.post("/employee/:id/rating", async (req, res) => {
  const employeeId = req.params.id;
  const body: any = req.body;

  const checkVotes = await prisma.employee
    .findUnique({
      where: {
        email: employeeId,
      },
      include: {
        ratings: {
          where: {
            whoVoted: body.whoVoted,
          },
        },
      },
    })
    .then((response) => {
      response?.ratings;
    });

  if (body.whoVoted == checkVotes) {
    /* const rating: any = await prisma.rating.create({
    data: {
      employeeEmail: employeeId,
      whoVoted: body.whoVoted,
      sensoTime: body.sensoTime,
      atitudeEmpreendedora: body.atitudeEmpreendedora,
      autonomiaResponsabilidade: body.autonomiaResponsabilidade,
      sensoDono: body.sensoDono,
      focoResultado: body.focoResultado,
      focoCliente: body.focoCliente,
      visaoSistemica: body.visaoSistemica,
      inovacao: body.inovacao,
      liderancaInspiradora: body.liderancaInspiradora,
      votedAt: body.votedAt,
    },
  }); */
    return res.json(body.whoVoted);
  }
});

app.listen(3333, () => {
  console.log("Server is running");
});
