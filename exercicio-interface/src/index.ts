
import { Desenvolvedor } from "./Desenvolvedor";
import { Gerente } from "./Gerente";
import { LiderTecnico } from "./LiderTecnico";

const dev = new Desenvolvedor("João");
const gerente = new Gerente("Carlos");
const lider = new LiderTecnico("Pedro");

dev.trabalhar();
dev.programar();

gerente.trabalhar();
gerente.gerenciar();

lider.trabalhar();
lider.programar();
lider.gerenciar();
