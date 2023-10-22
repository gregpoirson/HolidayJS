var months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
moment.tz.setDefault("America/New_York");

var anoAtual = new Date().getFullYear();

var feriasAno = [];
var feriasDet = [];
var selTime = '';

const DATE_FORMAT = "DD/MM/YYYY";

function fillYear() {
    //mês a mês
    for (i = 1; i <= months.length; i++) {
        feriasDet[i] = {};
        var rangeMes = getMonthDateRange(anoAtual, i);
        var nomes = [];
        var feriasMes = feriasAno.filter(f => parseInt(f.start.substring(3, 5)) == i || parseInt(f.end.substring(3, 5)) == i);

        //dias no mês
        for (var j = 1; rangeMes.start.isSameOrBefore(rangeMes.end); j++, rangeMes.start.add(1, 'days')) {
            for (pessoa of feriasMes) {
                if (nomes[pessoa.nome] == undefined) {
                    nomes[pessoa.nome] = [];
                }
                var start = moment(pessoa.start, DATE_FORMAT);
                var end = moment(pessoa.end, DATE_FORMAT);
                if (start.isSameOrBefore(rangeMes.start) && rangeMes.start.isSameOrBefore(end)) {
                    nomes[pessoa.nome].push({
                        dia: j,
                        observacao: pessoa.observacao
                    })
                }
            }
        }

        for (pes in nomes) {
            if (nomes[pes].length == 0) {
                delete nomes[pes];
            }
        }
        feriasDet[i] = nomes;
    }
}

function initAno(novAno) {
    console.log('ano = ' + novAno);

    feriasAno = feriasBase.filter(f => f.start.substring(6) == novAno || f.end.substring(6) == novAno);
    if (feriasAno.length == 0) {
        window.alert("Não foram definidas nenhuma ferias para o ano " + novAno);
        return;
    }

    const chkmostraHoje = document.getElementById('mostraHoje');
    if (chkmostraHoje.checked) {
        feriasAno = feriasAno.filter(f => {
            var valid = moment(f.end, DATE_FORMAT).isSameOrAfter(moment().startOf('day'));
            return valid;
        });
    }

    feriasAno.sort(function(a, b) {
        return moment(a.start, DATE_FORMAT) - moment(b.start, DATE_FORMAT)
    });

    anoAtual = novAno;
    $('#titulo').text('Holiday JS ' + anoAtual);

    var iAno = parseInt(anoAtual);
    const lbAnoMenos1 = document.getElementById('anoMenos1');
    lbAnoMenos1.textContent = iAno - 1;
    const lbAnoAtual = document.getElementById('anoAtual');
    lbAnoAtual.textContent = iAno;
    const lbAnoMais1 = document.getElementById('anoMais1');
    lbAnoMais1.textContent = iAno + 1;

    fillYear();

    changeTime($('option:selected', $('#times')).val());
}

$(function() {

    //outros anos
    $('#prevAno').off().on('click', () => {
        initAno(anoAtual - 1);
    });
    $('#anoAtual').off().on('click', () => {
        initAno(anoAtual);
    });
    $('#nextAno').off().on('click', () => {
        initAno(anoAtual + 1);
    });
    $('#times').on('change', () => {
        changeTime($('option:selected', this).val());
    });

    const cboTime = document.getElementById('times');
    //popular combo de times
    times.forEach(time => {
        var optTime = new Option(time.name, time.key);
        cboTime.add(optTime);
    });

    const chkmostraHoje = document.getElementById('mostraHoje');
    chkmostraHoje.addEventListener('change', function() {
        initAno(anoAtual);
        scrollAteHoje();
    });

    const chkmostraAvatar = document.getElementById('mostraAvatar');
    chkmostraAvatar.addEventListener('change', function() {
        initAno(anoAtual);
        FillTabelaCores();
    });

    initAno(anoAtual);

    FillTabelaCores();

    //D+45dias
    var today = new Date();
    var numberOfDaysToAdd = 45;
    var result = new Date(today.setDate(today.getDate() + numberOfDaysToAdd)).toLocaleDateString();
    const dayMais45 = document.getElementById('data45dias');
    dayMais45.textContent = result;

    scrollAteHoje();
});

function getMonthDateRange(year, month) {
    var startDate = moment([year, month - 1]);
    var endDate = moment(startDate).endOf('month');
    return {
        start: startDate,
        end: endDate
    }
}

function scrollAteHoje() {
    const hojes = document.getElementsByClassName("hoje");
    if (hojes.length > 0) {
        hojes[0].scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
}

function changeTime(selecao) {
    var membros = [];
    if (selecao != '') {
        for (var key in people_times) {
            var value = people_times[key];
            if (people_times[key].indexOf(selecao) >= 0) {
                membros.push(key);
            }
        }
        $('#membros').text(membros.sort().join(', '));
    } else {
        $('#membros').text('');
    }
    if (!CheckTimes()) {
        return;
    }
    RefreshFerias(selecao);
    RefreshFeriasConsolidado();
}

function FillTabelaCores() {
    var tbCores = $("#tbCores");
    tbCores.empty();
    var tr = "<tr><td class='tbColHead'>Cores: </td>";

    //vamo ordenar por nome (achar uma solução melhor...)
    var arcol = [];
    for (pess in colors) {
        arcol.push(pess);
    }
    arcol.sort();
    colors2 = [];
    for (pess of arcol) {
        colors2[pess] = colors[pess];
    }
    colors = colors2;

    const chkmostraAvatar = document.getElementById('mostraAvatar');

    for (pess in colors) {
        var imgAvatar = "";

        if (chkmostraAvatar.checked && avatar[pess] != undefined) {
            imgAvatar = `&nbsp;<img src='avatar/${avatar[pess]}.png' class='avatar avatar_md'/>`;
        }

        tr += `<td style='background-color:${colors[pess]};color:${textcolors[colors[pess]]};'>${pess}${imgAvatar}</td>`;
    }
    tbCores.append(tr + '</tr>');
}

function RefreshFeriasConsolidado() {
    var tbFerias = $("#tbFerias");
    tbFerias.empty();

    const chkmostraAvatar = document.getElementById('mostraAvatar');

    var tr1 = "<tr><td class='tbColHead'>Nome</td>";
    var tr2 = "<tr><td class='tbColHead'>Inicio</td>";
    var tr3 = "<tr><td class='tbColHead'>Fim</td>";
    var tr4 = "<tr><td class='tbColHead'>Dias</td>";
    for (var cnt = 0; cnt < feriasAno.length; cnt++) {
        var pessoa = feriasAno[cnt];
        //mostrar apenas o time escolhido, ou todos
        if (selTime != '' && people_times[pessoa.nome].indexOf(selTime) < 0) {
            continue;
        }
        var start = moment(pessoa.start, DATE_FORMAT);
        var end = moment(pessoa.end, DATE_FORMAT);
        var col = "";
        if (textcolors[colors[pessoa.nome]] != undefined) {
            col = "color:" + textcolors[colors[pessoa.nome]]
        }
        var imgAvatar = "";
        if (chkmostraAvatar.checked && avatar[pessoa.nome] != undefined) {
            imgAvatar = `&nbsp;<img src='avatar/${avatar[pessoa.nome]}.png' class='avatar avatar_md'/>`;
        }
        tr1 += `<td style='background-color:${colors[pessoa.nome]};${col}' title='${pessoa.observacao ?? "ferias"}'>${pessoa.nome}${imgAvatar}</td>`;
        tr2 += `<td>${pessoa.start}</td>`;
        tr3 += `<td>${pessoa.end}</td>`;
        tr4 += `<td>${(end.diff(start, 'days') + 1)}</td>`;
    }
    tbFerias.append(tr1 + '</tr>');
    tbFerias.append(tr2 + '</tr>');
    tbFerias.append(tr3 + '</tr>');
    tbFerias.append(tr4 + '</tr>');
}

function CheckTimes() {
    var nomesTimes = [];
    for (var key in people_times) {
        nomesTimes.push(key);
    }
    var erros = [];
    //verifica se todas as pessoas pertencem a um time
    for (pes of feriasAno) {
        if (nomesTimes.indexOf(pes.nome) < 0 && !erros.includes(pes.nome)) {
            erros.push(pes.nome);
        }
    }
    if (erros.length == 0) {
        return true;
    }
    var nomes = erros.join('<br />');
    //alert("As pessoas seguintes não pertencem a nenhum time, favor checar o arquivo times.js : " + nomes);
    document.getElementById("corpo").innerHTML = "<h2 style='color:red;'>As pessoas seguintes não pertencem a nenhum time, favor ajustar o arquivo times.js</h2><h3 style='color:red'>" + nomes + "</h3>";
    return false;
}

function RefreshFerias(selTime) {
    var hoje = moment().format(DATE_FORMAT);
    $('#tbCal td').remove();

    const chkmostraAvatar = document.getElementById('mostraAvatar');

    //linha dos dias do mês atual, com weekend, feriado, ...
    for (i = 1; i <= months.length; i++) {
        var range = getMonthDateRange(anoAtual, i);
        var tds = `<td class='month-name'>${months[i - 1]}</td>`;
        for (var j = 1; range.start.isSameOrBefore(range.end); j++, range.start.add(1, 'days')) {
            var estil = [];
            var title = [];
            //weekend ?
            var dw = range.start.weekday();
            if (dw == 6 || dw == 0) {
                estil.push("weekend");
                title.push("weekend");
            }
            var curDia = range.start.format(DATE_FORMAT);

            //feriado ?
            var feriado = feriados.find(f => f.data == curDia);
            if (feriado != undefined) {
                estil.push("feriado");
                title.push("feriado: " + feriado.desc);
            }
            //hoje ?
            if (curDia == hoje) {
                estil.push("hoje");
                title.push("é hoje !");
            }
            tds += `<td  id='${i}_${j}' title='${title.join(" / ")}' class='${estil.join(" ")}' style='padding: 9px;'>${j}</td>`;
        }
        var row = document.getElementById("tr" + i);
        row.innerHTML = tds;
        var idLastRow = "tr" + i;
        var kId = 1;
        for (pes in feriasDet[i]) {
            //mostrar apenas o time escolhido, ou todos
            if (selTime != '' && people_times[pes].indexOf(selTime) < 0) {
                continue;
            }
            var newId = `tr${i}_${kId++}`;
            tds = "";
            j = 1;
            numDias = 0;
            range = getMonthDateRange(anoAtual, i);
            for (var j = 1; range.start.isSameOrBefore(range.end); j++, range.start.add(1, 'days')) {
                var bkg = 'white';
                var text = '';
                var title = '';
                var cn = '';
                //essa pessoa tem ferias nesse dia ? vamos pegar a observação e a cor
                var fd = feriasDet[i][pes].find(d => d.dia == j);
                if (fd != undefined) {
                    title = fd.observacao ?? 'ferias';
                    bkg = colors[pes];
                    text = ' ';
                    cn = "hoverName";
                    numDias++;
                }
                tds += `<td class='${cn}' style='background-color:${bkg}' title='${title}'>${text}</td>`;
            }
            var colnome = "";
            if (textcolors[colors[pes]] != undefined) {
                colnome = "color:" + textcolors[colors[pes]]
            }

            var imgAvatar = "";
            if (chkmostraAvatar.checked && avatar[pes] != undefined) {
                imgAvatar = `&nbsp;<img src='avatar/${avatar[pes]}.png' class='avatar avatar_sm'/>`;
            }

            var nometd = `<td style='background-color:${colors[pes]};${colnome}'><label class='lblNome'>${pes}${imgAvatar}</label></td>`;
            $("#" + idLastRow).after(`<tr id='${newId}' title='${pes}: ${numDias} dias' style='font-size: 9px;'>${nometd}${tds}</tr>`);
            idLastRow = newId;
        }
    }

    hoverTD();
}

function hoverTD() {
    //hover no td de ferias destaca o nome na 1a coluna
    $(".hoverName").off('mouseenter mouseleave');
    $(".hoverName").hover(function() {
        //console.log('in ' + $(this).parent('tr')[0].id);
        $(this).parent('tr').addClass('hoverTD');
    }, function() {
        //console.log('out ' + $(this).parent('tr')[0].id);
        $(this).parent('tr').removeClass('hoverTD');
    });
}