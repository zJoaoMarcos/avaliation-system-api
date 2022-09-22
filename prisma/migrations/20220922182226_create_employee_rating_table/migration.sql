-- CreateTable
CREATE TABLE "employee" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" TEXT NOT NULL,
    "employeeEmail" TEXT NOT NULL,
    "whoVoted" TEXT NOT NULL,
    "sensoTime" INTEGER NOT NULL,
    "atitudeEmpreendedora" INTEGER NOT NULL,
    "autonomiaResponsabilidade" INTEGER NOT NULL,
    "sensoDono" INTEGER NOT NULL,
    "focoResultado" INTEGER NOT NULL,
    "focoCliente" INTEGER NOT NULL,
    "visaoSistemica" INTEGER NOT NULL,
    "inovacao" INTEGER NOT NULL,
    "liderancaInspiradora" INTEGER NOT NULL,
    "votedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_employeeEmail_fkey" FOREIGN KEY ("employeeEmail") REFERENCES "employee"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
