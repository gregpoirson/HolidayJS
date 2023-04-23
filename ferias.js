//definições das ferias do time
//uma linha para cada intervalo de ferias
//depois será feito uma consolidação por pessoa/por mês

//os campos obrigatorios são : nome, start, end
//o(s) campos opcionais são : observacao
//exemplo : feriasBase[2023].push({nome:'Diogo A', start:'27/02/2023', end:'12/03/2023', observacao: 'Bora Bora'});

var feriasBase = [];

feriasBase[2024] = [];
feriasBase[2024].push({nome:'Cesar', start:'15/01/2024', end:'29/01/2024', observacao: 'Veni, vidi vici' });
feriasBase[2024].push({nome:'Marcelo H', start:'06/05/2024', end:'25/05/2024'});

feriasBase[2023] = [];
feriasBase[2023].push({nome:'Alessandra', start:'24/04/2023', end:'29/04/2023'});
feriasBase[2023].push({nome:'Alex', start:'25/01/2023', end:'25/01/2023', observacao: 'Folga'});
feriasBase[2023].push({nome:'Brasil', start:'02/01/2023', end:'21/01/2023'});
feriasBase[2023].push({nome:'Cadu', start:'30/01/2023', end:'18/02/2023'});
feriasBase[2023].push({nome:'Cadu', start:'22/02/2023', end:'24/02/2023', observacao: 'Banco de Horas'});
feriasBase[2023].push({nome:'Cesar', start:'12/07/2023', end:'26/07/2023'});
feriasBase[2023].push({nome:'Diego', start:'06/03/2023', end:'19/03/2023'});
feriasBase[2023].push({nome:'Diego', start:'24/07/2023', end:'29/07/2023'});
feriasBase[2023].push({nome:'Diogo A', start:'27/02/2023', end:'12/03/2023', observacao: 'Bora Bora'});
feriasBase[2023].push({nome:'Diogo A', start:'10/04/2023', end:'15/04/2023', observacao: 'Paris'});
feriasBase[2023].push({nome:'Diogo A', start:'10/07/2023', end:'19/07/2023', observacao: 'Tokyo 東京'});
feriasBase[2023].push({nome:'Diogo H', start:'02/01/2023', end:'15/01/2023'});
feriasBase[2023].push({nome:'Erika', start:'30/01/2023', end:'12/02/2023'});
feriasBase[2023].push({nome:'Fabio', start:'22/02/2023', end:'13/03/2023'});
feriasBase[2023].push({nome:'Felipe', start:'22/02/2023', end:'03/03/2023'});
feriasBase[2023].push({nome:'Felipe', start:'24/04/2023', end:'29/04/2023'});
feriasBase[2023].push({nome:'Felipe', start:'12/06/2023', end:'25/06/2023'});
feriasBase[2023].push({nome:'Fernando Conde', start:'26/12/2022', end:'14/01/2023'});
feriasBase[2023].push({nome:'Fernando Conde', start:'22/02/2023', end:'03/03/2023'});
feriasBase[2023].push({nome:'Fernando R', start:'27/02/2023', end:'08/03/2023' });
feriasBase[2023].push({nome:'Gabriel', start:'22/02/2023', end:'03/03/2023'});
feriasBase[2023].push({nome:'Gabriel', start:'12/06/2023', end:'25/06/2023'});
feriasBase[2023].push({nome:'Gabriel', start:'31/07/2023', end:'05/08/2023'});
feriasBase[2023].push({nome:'Greg', start:'02/01/2023', end:'16/01/2023'});
feriasBase[2023].push({nome:'Henrique C', start:'10/04/2023', end:'15/04/2023'});
feriasBase[2023].push({nome:'Iata', start:'23/01/2023', end:'27/01/2023' });
feriasBase[2023].push({nome:'Iata', start:'24/07/2023', end:'28/07/2023' });
feriasBase[2023].push({nome:'Jamile', start:'09/01/2023', end:'23/01/2023'});
feriasBase[2023].push({nome:'Jamile', start:'17/07/2023', end:'31/07/2023'});
feriasBase[2023].push({nome:'Joao', start:'06/02/2023', end:'19/02/2023'});
feriasBase[2023].push({nome:'Joao', start:'24/07/2023', end:'29/07/2023'});
feriasBase[2023].push({nome:'Leonardo', start:'12/06/2023', end:'30/06/2023'});
feriasBase[2023].push({nome:'Marcelo A', start:'30/01/2023', end:'18/02/2023'});
feriasBase[2023].push({nome:'Marcus V.', start:'23/01/2023', end:'11/02/2023' });
feriasBase[2023].push({nome:'Marcus V.', start:'01/08/2023', end:'10/08/2023' });
feriasBase[2023].push({nome:'Markonds', start:'16/01/2023', end:'29/01/2023'});
feriasBase[2023].push({nome:'Markonds', start:'29/05/2023', end:'05/06/2023'});
feriasBase[2023].push({nome:'Markonds', start:'24/07/2023', end:'31/07/2023'});
feriasBase[2023].push({nome:'Natalia', start:'12/06/2023', end:'21/06/2023'});
feriasBase[2023].push({nome:'Natalia', start:'24/04/2023', end:'29/04/2023'});
feriasBase[2023].push({nome:'Natalia', start:'18/09/2023', end:'01/10/2023'});
feriasBase[2023].push({nome:'Navarro', start:'02/05/2023', end:'21/05/2023'});
feriasBase[2023].push({nome:'Pedro', start:'01/03/2023', end:'30/03/2023'});
feriasBase[2023].push({nome:'Rafael M', start:'10/02/2023', end:'10/02/2023', observacao: 'Folga'});
feriasBase[2023].push({nome:'Rafael M', start:'13/02/2023', end:'13/02/2023', observacao: 'Folga'});
feriasBase[2023].push({nome:'Marcelo H', start:'08/05/2023', end:'27/05/2023'});
feriasBase[2023].push({nome:'Vinicius', start:'20/03/2023', end:'29/03/2023'});
feriasBase[2023].push({nome:'Waldemir', start:'30/01/2023', end:'18/02/2023' });
feriasBase[2023].push({nome:'Waldemir', start:'20/03/2023', end:'29/03/2023' });
feriasBase[2023].push({nome:'Vanessa', start:'03/07/2023', end:'01/08/2023', observacao: 'Férias !!'});
feriasBase[2023].push({nome:'Julio', start:'20/03/2023', end:'03/04/2023', observacao: 'Férias'});
feriasBase[2023].push({nome:'Julio', start:'12/06/2023', end:'26/06/2023', observacao: 'Férias'});


feriasBase[2022] = [];
feriasBase[2022].push({nome:'Diogo A', start:'06/07/2022', end:'13/07/2022'});
feriasBase[2022].push({nome:'Diogo A', start:'09/05/2022', end:'22/05/2022', observacao: 'Férias RJ'});
feriasBase[2022].push({nome:'Diogo A', start:'06/04/2022', end:'13/04/2022', observacao: 'Férias SP'});
feriasBase[2022].push({nome:'Erika', start:'03/01/2022', end:'16/01/2022'});
feriasBase[2022].push({nome:'Natalia', start:'25/04/2022', end:'30/04/2022'});
feriasBase[2022].push({nome:'Natalia', start:'20/06/2022', end:'03/07/2022'});
feriasBase[2022].push({nome:'Natalia', start:'29/08/2022', end:'07/09/2022'});
feriasBase[2022].push({nome:'Alessandra', start:'02/03/2022', end:'11/03/2022'});
feriasBase[2022].push({nome:'Alessandra', start:'25/04/2022', end:'30/04/2022'});
feriasBase[2022].push({nome:'Alessandra', start:'29/08/2022', end:'07/09/2022'});
feriasBase[2022].push({nome:'Alessandra', start:'16/11/2022', end:'30/11/2022'});
feriasBase[2022].push({nome:'Fernando Conde', start:'10/01/2022', end:'19/01/2022' });
feriasBase[2022].push({nome:'Fernando Conde', start:'21/01/2022', end:'21/01/2022', observacao: 'BH'});
feriasBase[2022].push({nome:'Fernando Conde', start:'26/12/2022', end:'14/01/2023'});
feriasBase[2022].push({nome:'Fernando Conde', start:'22/02/2022', end:'03/03/2022' });
feriasBase[2022].push({nome:'Marcelo A', start:'07/02/2022', end:'26/02/2022'});
feriasBase[2022].push({nome:'Vinicius', start:'14/03/2022', end:'27/03/2022', observacao: 'Carnaval fora de época'});
feriasBase[2022].push({nome:'Vinicius', start:'09/05/2022', end:'16/05/2022', observacao: 'Manda PIX'});
feriasBase[2022].push({nome:'Vinicius', start:'20/06/2022', end:'27/06/2022'});
feriasBase[2022].push({nome:'Vinicius', start:'19/09/2022', end:'08/10/2022'});
feriasBase[2022].push({nome:'Brasil', start:'03/01/2022', end:'22/01/2022' });
feriasBase[2022].push({nome:'Greg', start:'17/01/2022', end:'05/02/2022', observacao: 'Férias SpaceX'});
feriasBase[2022].push({nome:'Greg', start:'02/03/2022', end:'11/03/2022', observacao: 'Férias BlueOrigin'});
feriasBase[2022].push({nome:'Cadu', start:'07/02/2022', end:'26/02/2022'});
feriasBase[2022].push({nome:'Ronaldo', start:'15/03/2022', end:'30/03/2022'});
feriasBase[2022].push({nome:'Ronaldo', start:'15/07/2022', end:'30/03/2022'});
feriasBase[2022].push({nome:'Jamile', start:'24/01/2022', end:'01/02/2022' });
feriasBase[2022].push({nome:'Marcelo H', start:'16/05/2022', end:'27/05/2022' });
feriasBase[2022].push({nome:'Iata', start:'19/07/2022', end:'22/07/2022' });
feriasBase[2022].push({nome:'Jamile', start:'18/07/2022', end:'01/08/2022' });
feriasBase[2022].push({nome:'Caio', start:'09/05/2022', end:'28/05/2022' });
feriasBase[2022].push({nome:'Fernando R', start:'21/11/2022', end:'10/12/2022' });
feriasBase[2022].push({nome:'Marcio S', start:'25/07/2022', end:'29/07/2022'});
feriasBase[2022].push({nome:'Hercules', start:'18/07/2022', end:'01/08/2022'});
feriasBase[2022].push({nome:'Hercules', start:'21/11/2022', end:'05/12/2022'});
feriasBase[2022].push({nome:'Diogo H', start:'18/07/2022', end:'23/07/2022'});
feriasBase[2022].push({nome:'Henrique C', start:'07/11/2022', end:'20/11/2022'});
feriasBase[2022].push({nome:'Diego', start:'18/07/2022', end:'31/07/2022'});
feriasBase[2022].push({nome:'Diego', start:'09/08/2022', end:'14/08/2022'});
feriasBase[2022].push({nome:'Erika', start:'18/07/2022', end:'27/07/2022'});
feriasBase[2022].push({nome:'Erika', start:'24/10/2022', end:'08/11/2022'});
feriasBase[2022].push({nome:'Greg', start:'03/10/2022', end:'17/10/2022'});


feriasBase[2021] = [];
feriasBase[2021].push({nome:'Alessandra', start:'26/04/2021', end:'01/05/2021'});
feriasBase[2021].push({nome:'Alessandra', start:'19/10/2021', end:'01/11/2021'});
feriasBase[2021].push({nome:'Natalia', start:'26/04/2021', end:'01/05/2021'});
feriasBase[2021].push({nome:'Natalia', start:'07/06/2021', end:'16/06/2021'});
feriasBase[2021].push({nome:'Natalia', start:'08/09/2021', end:'21/09/2021'});
feriasBase[2021].push({nome:'Natalia', start:'06/09/2021', end:'06/09/2021', observacao: 'Banco de Horas'});
feriasBase[2021].push({nome:'Fernando Conde', start:'01/01/2021', end:'09/01/2021' });
feriasBase[2021].push({nome:'Marcelo H', start:'11/10/2021', end:'26/10/2021' });
feriasBase[2021].push({nome:'Ronaldo', start:'08/09/2021', end:'27/09/2021'});
feriasBase[2021].push({nome:'Ronaldo', start:'06/09/2021', end:'06/09/2021', observacao: 'Banco de Horas'});
feriasBase[2021].push({nome:'Fernando Conde', start:'17/02/2021', end:'26/02/2021' });
feriasBase[2021].push({nome:'Fernando Conde', start:'26/07/2021', end:'31/07/2021' });
feriasBase[2021].push({nome:'Fernando Conde', start:'11/10/2021', end:'19/10/2021', observacao: 'Licença' });
feriasBase[2021].push({nome:'Brasil', start:'11/01/2021', end:'30/01/2021' });
feriasBase[2021].push({nome:'Cadu', start:'01/02/2021', end:'14/02/2021', observacao: 'Ferias'});
feriasBase[2021].push({nome:'Cadu', start:'12/04/2021', end:'17/04/2021', observacao: 'Ferias'});
feriasBase[2021].push({nome:'Cadu', start:'19/04/2021', end:'20/04/2021', observacao: 'Banco de Horas'});
feriasBase[2021].push({nome:'Cadu', start:'22/04/2021', end:'22/04/2021', observacao: 'Banco de Horas'});
feriasBase[2021].push({nome:'Patricia', start:'01/09/2021', end:'30/09/2021', observacao: 'Ferias'});
feriasBase[2021].push({nome:'Greg', start:'26/04/2021', end:'30/04/2021'});
feriasBase[2021].push({nome:'Greg', start:'05/07/2021', end:'29/07/2021'});
feriasBase[2021].push({nome:'Fernando R', start:'22/11/2021', end:'11/12/2021', observacao: 'Ferias'});
feriasBase[2021].push({nome:'Vinicius', start:'03/05/2021', end:'12/05/2021', observacao: 'Ferias'});
feriasBase[2021].push({nome:'Jamile', start:'26/07/2021', end:'15/08/2021', observacao: 'Ferias'});
feriasBase[2021].push({nome:'Jamile', start:'27/12/2021', end:'04/01/2022' });


// feriasBase[2020] = [];
// feriasBase[2020].push({nome:'Alessandra', start:'20/10/2020', end:'29/10/2020'});
// feriasBase[2020].push({nome:'Alessandra', start:'15/06/2020', end:'28/06/2020'});
// feriasBase[2020].push({nome:'Natalia', start:'26/02/2020', end:'28/02/2020', observacao: 'Folga SAS' });
// feriasBase[2020].push({nome:'Natalia', start:'04/05/2020', end:'09/05/2020'});
// feriasBase[2020].push({nome:'Natalia', start:'15/06/2020', end:'24/06/2020'});
// feriasBase[2020].push({nome:'Natalia', start:'08/09/2020', end:'21/09/2020'});
// feriasBase[2020].push({nome:'Ronaldo', start:'13/10/2020', end:'18/10/2020' });
// feriasBase[2020].push({nome:'Cadu', start:'03/02/2020', end:'22/02/2020', observacao: 'Ferias'});
// feriasBase[2020].push({nome:'Greg', start:'06/01/2020', end:'25/01/2020' });
// feriasBase[2020].push({nome:'Brasil', start:'06/01/2020', end:'25/01/2020'});
// feriasBase[2020].push({nome:'Vinicius', start:'03/02/2020', end:'17/02/2020', observacao: 'Cruzeiro em Minas Gerais'});
// feriasBase[2020].push({nome:'Vinicius', start:'09/11/2020', end:'14/11/2020'});
// feriasBase[2020].push({nome:'Kleber', start:'02/03/2020', end:'21/03/2020'});
// feriasBase[2020].push({nome:'Fernando Conde', start:'21/12/2020', end:'31/12/2020' });
// feriasBase[2020].push({nome:'Caio', start:'16/03/2020', end:'04/04/2020' });
// feriasBase[2020].push({nome:'Marcelo', start:'04/05/2020', end:'23/05/2020', observacao: 'Ferias'});


// feriasBase[2019] = [];
// feriasBase[2019].push({nome:'Alessandra', start:'01/01/2019', end:'15/01/2019'});
// feriasBase[2019].push({nome:'Alessandra', start:'11/06/2019', end:'10/07/2019'});
// feriasBase[2019].push({nome:'Thiago', start:'06/03/2019', end:'25/03/2019' });
// feriasBase[2019].push({nome:'Brasil', start:'14/01/2019', end:'12/02/2019' });
// feriasBase[2019].push({nome:'Natalia', start:'06/05/2019', end:'15/05/2019'});
// feriasBase[2019].push({nome:'Natalia', start:'19/08/2019', end:'07/09/2019'});
// feriasBase[2019].push({nome:'Ronaldo', start:'01/10/2019', end:'20/10/2019' });
// feriasBase[2019].push({nome:'Marcelo', start:'13/05/2019', end:'31/05/2019'});
// feriasBase[2019].push({nome:'Kleber', start:'01/04/2019', end:'30/04/2019'});
// feriasBase[2019].push({nome:'Greg', start:'02/01/2019', end:'11/01/2019', observacao:'trocando fraldas'});
// feriasBase[2019].push({nome:'Erika', start:'20/02/2019', end:'06/03/2019'});
// feriasBase[2019].push({nome:'Vinicius', start:'05/08/2019', end:'19/08/2019', observacao:'Vendo o Mickey'});
// feriasBase[2019].push({nome:'Thiago', start:'24/06/2019', end:'28/06/2019', observacao:'Lua de Mel'});
// feriasBase[2019].push({nome:'Pedro', start:'04/11/2019', end:'18/11/2019'});
// feriasBase[2019].push({nome:'Greg', start:'02/10/2019', end:'11/10/2019' });


// feriasBase[2018] = [];
// feriasBase[2018].push({nome:'Ronaldo', start:'05/11/2018', end:'25/11/2018' });
// feriasBase[2018].push({nome:'Marcelo', start:'01/01/2018', end:'05/01/2018' });
// feriasBase[2018].push({nome:'Marcelo', start:'02/05/2018', end:'11/05/2018'});
// feriasBase[2018].push({nome:'Alessandra', start:'17/12/2018', end:'31/12/2018'});
// feriasBase[2018].push({nome:'Kleber', start:'15/02/2018', end:'16/03/2018'});
// feriasBase[2018].push({nome:'Natalia', start:'24/04/2018', end:'03/05/2018'});
// feriasBase[2018].push({nome:'Natalia', start:'10/09/2018', end:'29/09/2018'});
// feriasBase[2018].push({nome:'Greg', start:'08/01/2018', end:'27/01/2018'});
// feriasBase[2018].push({nome:'Greg', start:'14/02/2018', end:'23/02/2018'});
// feriasBase[2018].push({nome:'Erika', start:'05/03/2018', end:'14/03/2018'});
// feriasBase[2018].push({nome:'Brasil', start:'02/01/2018', end:'21/01/2018'});
// feriasBase[2018].push({nome:'Vinicius', start:'29/01/2018', end:'12/02/2018'});
// feriasBase[2018].push({nome:'Greg', start:'01/10/2018', end:'20/10/2018'});

