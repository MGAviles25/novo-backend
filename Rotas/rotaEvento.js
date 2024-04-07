import { Router } from 'express';
import eventoCTRL from '../Controles/eventoCTRL.js';

const rotaEvento = new Router();
const cliCtrl = new eventoCTRL();

rotaEvento
.get('/', cliCtrl.consultar)
.get('/:termo', cliCtrl.consultar)
.post('/', cliCtrl.gravar)
.put('/:codigo', cliCtrl.atualizar)
.patch('/:codigo', cliCtrl.atualizar)
.delete('/:codigo', cliCtrl.excluir);


export default rotaEvento;