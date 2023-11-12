var months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
moment.tz.setDefault("America/New_York");

var anoAtual = new Date().getFullYear();

var feriasAno = [];
var feriasDet = [];
var selTeam = '';

const DATE_FORMAT = "DD/MM/YYYY";

function fillYear() {
    //mês a mês
    for (i = 1; i <= months.length; i++) {
        feriasDet[i] = {};
        var rangeMes = getMonthDateRange(anoAtual, i);
        var names = [];
        var feriasMes = feriasAno.filter(f => parseInt(f.start.substring(3, 5)) == i || parseInt(f.end.substring(3, 5)) == i);

        //dias no mês
        for (var j = 1; rangeMes.start.isSameOrBefore(rangeMes.end); j++, rangeMes.start.add(1, 'days')) {
            for (pessoa of feriasMes) {
                if (names[pessoa.name] == undefined) {
                    names[pessoa.name] = [];
                }
                var start = moment(pessoa.start, DATE_FORMAT);
                var end = moment(pessoa.end, DATE_FORMAT);
                if (start.isSameOrBefore(rangeMes.start) && rangeMes.start.isSameOrBefore(end)) {
                    names[pessoa.name].push({
                        dia: j,
                        observation: pessoa.observation
                    })
                }
            }
        }

        for (pes in names) {
            if (names[pes].length == 0) {
                delete names[pes];
            }
        }
        feriasDet[i] = names;
    }
}

function initAno(novAno) {
    console.log('ano = ' + novAno);

    feriasAno = leavesBase.filter(f => f.start.substring(6) == novAno || f.end.substring(6) == novAno);
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

    changeTeam($('option:selected', $('#teams')).val());
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
    $('#teams').on('change', () => {
        changeTeam($('option:selected', this).val());
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

    fillComboTeams();

    calculateTextColors();

    initAno(anoAtual);

    FillTabelaCores();

    calculateMinDelay();

    scrollAteHoje();

});

function calculateMinDelay() {
    //D+45dias
    var today = new Date();
    var numberOfDaysToAdd = 45;
    var result = new Date(today.setDate(today.getDate() + numberOfDaysToAdd)).toLocaleDateString();
    const dayMais45 = document.getElementById('data45dias');
    dayMais45.textContent = result;
}

function fillComboTeams() {
    const cboTeam = document.getElementById('teams');
    //popular combo de teams
    teams.forEach(team => {
        var optTeam = new Option(team.name, team.key);
        cboTeam.add(optTeam);
    });
}

function calculateTextColors() {
    for (let idx in colors)
    {
        textcolors[colors[idx]] = getTextColor(colors[idx]);
    }    
}

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

function changeTeam(selecao) {
    var membros = [];
    if (selecao != '') {
        for (var key in people_teams) {
            var value = people_teams[key];
            if (people_teams[key].indexOf(selecao) >= 0) {
                membros.push(key);
            }
        }
        $('#membros').text(membros.sort().join(', '));
    } else {
        $('#membros').text('');
    }
    if (!CheckTeams()) {
        return;
    }
    RefreshFerias(selecao);
    RefreshFeriasConsolidado();
}

function FillTabelaCores() {
    var tbCores = $("#tbCores");
    tbCores.empty();
    var tr = "<tr><td class='tbColHead'>Cores: </td>";

    //vamo ordenar por name (achar uma solução melhor...)
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
        //mostrar apenas o team escolhido, ou todos
        if (selTeam != '' && people_teams[pessoa.name].indexOf(selTeam) < 0) {
            continue;
        }
        var start = moment(pessoa.start, DATE_FORMAT);
        var end = moment(pessoa.end, DATE_FORMAT);
        var col = "";
        if (textcolors[colors[pessoa.name]] != undefined) {
            col = "color:" + textcolors[colors[pessoa.name]]
        }
        var imgAvatar = "";
        if (chkmostraAvatar.checked && avatar[pessoa.name] != undefined) {
            imgAvatar = `&nbsp;<img src='avatar/${avatar[pessoa.name]}.png' class='avatar avatar_md'/>`;
        }
        tr1 += `<td style='background-color:${colors[pessoa.name]};${col}' title='${pessoa.observation ?? "ferias"}'>${pessoa.name}${imgAvatar}</td>`;
        tr2 += `<td>${pessoa.start}</td>`;
        tr3 += `<td>${pessoa.end}</td>`;
        tr4 += `<td>${(end.diff(start, 'days') + 1)}</td>`;
    }
    tbFerias.append(tr1 + '</tr>');
    tbFerias.append(tr2 + '</tr>');
    tbFerias.append(tr3 + '</tr>');
    tbFerias.append(tr4 + '</tr>');
}

function CheckTeams() {
    var namesTeams = [];
    for (var key in people_teams) {
        namesTeams.push(key);
    }
    var erros = [];
    //verifica se todas as pessoas pertencem a um team
    for (pes of feriasAno) {
        if (namesTeams.indexOf(pes.name) < 0 && !erros.includes(pes.name)) {
            erros.push(pes.name);
        }
    }
    if (erros.length == 0) {
        return true;
    }
    var names = erros.join('<br />');
    //alert("As pessoas seguintes não pertencem a nenhum team, favor checar o arquivo teams.js : " + nomes);
    document.getElementById("corpo").innerHTML = "<h2 style='color:red;'>As pessoas seguintes não pertencem a nenhum team, favor ajustar o arquivo teams.js</h2><h3 style='color:red'>" + names + "</h3>";
    return false;
}

function RefreshFerias(selTeam) {
    var hoje = moment().format(DATE_FORMAT);
    $('#tbCal td').remove();

    const chkmostraAvatar = document.getElementById('mostraAvatar');

    //linha dos dias do mês atual, com weekend, dayoff, ...
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

            //dayoff ?
            var dayoff = daysoff.find(f => f.date == curDia);
            if (dayoff != undefined) {
                estil.push("dayoff");
                title.push("dayoff: " + dayoff.desc);
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
            //mostrar apenas o team escolhido, ou todos
            if (selTeam != '' && people_teams[pes].indexOf(selTeam) < 0) {
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
                    title = fd.observation ?? 'ferias';
                    bkg = colors[pes];
                    text = ' ';
                    cn = "hoverName";
                    numDias++;
                }
                tds += `<td class='${cn}' style='background-color:${bkg}' title='${title}'>${text}</td>`;
            }
            var colname = "";
            if (textcolors[colors[pes]] != undefined) {
                colname = "color:" + textcolors[colors[pes]]
            }

            var imgAvatar = "";
            if (chkmostraAvatar.checked && avatar[pes] != undefined) {
                imgAvatar = `&nbsp;<img src='avatar/${avatar[pes]}.png' class='avatar avatar_sm'/>`;
            }

            var nametd = `<td style='background-color:${colors[pes]};${colname}'><label class='lblNome'>${pes}${imgAvatar}</label></td>`;
            $("#" + idLastRow).after(`<tr id='${newId}' title='${pes}: ${numDias} dias' style='font-size: 9px;'>${nametd}${tds}</tr>`);
            idLastRow = newId;
        }
    }

    //hoverTD();
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