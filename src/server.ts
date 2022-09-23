import express, { response } from "express";
import cors from "cors";

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

  const wasVote = await prisma.employee.findUnique({
    where: {
      email: `${employeeId}`,
    },
    select: {
      ratings: {
        where: {
          whoVoted: {
            contains: `${req.body.whoVoted}`,
          },
        },
      },
    },
  });

  console.log(wasVote);

  try {
    if (wasVote == undefined) {
      const rating: any = await prisma.rating.create({
        data: {
          employeeEmail: employeeId,
          whoVoted: req.body.whoVoted,
          sensoTime: req.body.sensoTime,
          atitudeEmpreendedora: req.body.atitudeEmpreendedora,
          autonomiaResponsabilidade: req.body.autonomiaResponsabilidade,
          sensoDono: req.body.sensoDono,
          focoResultado: req.body.focoResultado,
          focoCliente: req.body.focoCliente,
          visaoSistemica: req.body.visaoSistemica,
          inovacao: req.body.inovacao,
          liderancaInspiradora: req.body.liderancaInspiradora,
          votedAt: req.body.votedAt,
        },
      });

      return res.status(200).json(rating);
    }
    return res
      .status(400)
      .send({ error: "Ops parece que vc ja votou nesse colaborador " });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Vote failed" });
  }
});

app.listen(3333, () => {
  console.log("Server is running");
});
