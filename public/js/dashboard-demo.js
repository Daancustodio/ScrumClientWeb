$(function() {

    Morris.Line({
        element: 'morris-area-chart',
        data: [{
            period: '2014-07-01',
            meta: 100,
            desempenho: 99
        }, {
            period: '2014-07-02',
            meta: 90,
            desempenho: 95
        }, {
            period: '2014-07-03',
            meta: 80,
            desempenho: 83
        }, {
            period: '2014-07-04',
            meta: 70,
            desempenho: 65
        }, {
            period: '2014-07-05',
            meta: 60,
            desempenho: 61
        }, {
            period: '2014-07-06',
            meta: 50,
            desempenho: 50
        }, {
            period: '2014-07-07',
            meta: 40,
            desempenho: 50
        }, {
            period: '2014-07-08',
            meta: 30,
            desempenho: 50
        }, {
            period: '2014-07-09',
            meta: 20,
            desempenho: 50
        }, {
            period: '2014-07-10',
            meta: 10,
            desempenho: 50        }, {
            period: '2014-07-10',
            meta: 1,
            desempenho: 50        
        }],
        xkey: 'period',
        ykeys: ['meta', 'desempenho'],
        labels: ['Meta da Equipe', 'Desempenho'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Concluido",
            value: 60
        }, {
            label: "Em Andamento",
            value: 40
        }],
        resize: true
    });

    

});
