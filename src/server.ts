import cors from "cors";
import express from "express";

import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.use(express.json());
app.use(cors());

app.get("/employees/:id", async (req, res) => {
  const employee = req.params.id;
  const getEmployees: any = await prisma.employee.findMany({
    where: {
      email: {
        not: `${employee}`,
      },
    },
    include: {
      ratings: true,
    },
  });

  return res.status(200).json(getEmployees);
});

app.post("/employee/:id/rating", async (req, res) => {
  const employeeId = req.params.id;
  const body = req.body;

  const voteAlreadyExists = await prisma.rating.findMany({
    where: {
      employeeEmail: {
        equals: `${employeeId}`,
      },
      whoVoted: `${body.whoVoted}`,
    },
  });

  if (voteAlreadyExists.length == 0) {
    const rating = await prisma.rating.create({
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
    });

    return res.status(200).json(rating);
  }

  return res.send({ Error: "Ops parece que vc ja votou nesse funcionário" });
});

const port = 3333;

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
