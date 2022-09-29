import cors from "cors";
import bodyParser from "body-parser";
import express from "express";

import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/employees/:id", async (req, res) => {
  const employee = req.params.id;

  const employeeAlreadyExists: any = await prisma.employee.findMany({
    where: {
      email: {
        equals: `${employee}`,
      },
    },
  });

  if (employeeAlreadyExists.length == 0) {
    return res.status(400).send({ Error: "Employee does not exists" });
  }

  const getEmployees: any = await prisma.employee.findMany({
    where: {
      email: {
        not: `${employee}`,
      },
    },
    include: {
      ratings: {
        select: {
          whoVoted: true,
        },
      },
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

  return res
    .status(400)
    .send({ Error: "Ops parece que vc ja votou nesse funcionário" });
});

const port = 3333;

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running in port ${port}`);
});
