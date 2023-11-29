// Statistics.js
import React, { useEffect } from 'react';
import './Statstics.css'; // Import your CSS file
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import '@amcharts/amcharts4/themes/animated';

const Statistics = ({ real, fake, recipe_evaluated }) => {
  useEffect(() => {
    var data = [
      { 'recipe_type': 'Real', 'value': real },
      { 'recipe_type': 'Fake', 'value': fake }
    ];
    var sum = 0;
    var thresholds = [10, 15, 20, 25, 30];

    for (let i = 0; i < 2; i++) {
      sum += parseInt(data[i].value);
    }

    console.log(sum);

    if (sum !== 0) {
      document.getElementById('chartdiv').style.height = '400px';

      am4core.ready(function () {
        var chart = am4core.create('chartdiv', am4charts.PieChart);
        chart.data = data;

        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = 'value';
        pieSeries.dataFields.category = 'recipe_type';
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        pieSeries.colors.list = ['teal', 'crimson'].map(function (color) {
          return new am4core.color(color);
        });

        chart.legend = new am4charts.Legend();
        chart.legend.position = 'bottom';
        chart.legend.scrollable = true;
        chart.legend.labels.template.truncate = false;
        am4core.addLicense('ch-custom-attribution');
        chart.innerRadius = am4core.percent(60);
        chart.tooltip.label.maxWidth = 150;
        chart.tooltip.label.wrap = true;
        var label = pieSeries.createChild(am4core.Label);
        label.text = 'Total: {values.value.sum}';
        label.horizontalCenter = 'middle';
        label.verticalCenter = 'middle';
        label.fontSize = 30;
      });
    } else {
      document.getElementById('chartdiv').style.height = '0px';
    }

    var total = parseInt(recipe_evaluated);
    console.log('Total');
    console.log(total);
    var idx = 0;
    for (let i = 1; i <= 5 && total >= thresholds[i - 1]; i++) {
      var btn = 'rs' + i;
      document.getElementById(btn).classList.toggle('filled');
      idx = i - 1;
    }

    var comment;
    if (idx + 1 >= 5) {
      comment = 'You are a 5-star rated user. Keep it up!';
    } else {
      var diff = thresholds[idx + 1] - total;
      comment = `Evaluate ${diff} more recipes to get your next star!`;
    }

    document.getElementById('star_review').innerHTML = comment;
  }, [real, fake, recipe_evaluated]);

  return (
    <div id="statbox">
      <div className="animate-gradient-text">
        <h1>
          <i>Hi {name}, these are your stats</i>
        </h1>
      </div>

      <div>
        <div id="chartdiv"></div>
      </div>
      <h1 id="star_review"></h1>
      <div className="rating-stars" style={{ margin: 'auto' }}>
        <span className="star-icon" id="rs1">
          ★
        </span>
        <span className="star-icon" id="rs2">
          ★
        </span>
        <span className="star-icon" id="rs3">
          ★
        </span>
        <span className="star-icon" id="rs4">
          ★
        </span>
        <span className="star-icon" id="rs5">
          ★
        </span>
      </div>

      <div>
        <h2>Hi {name}, these are your Confusion Matrix stats</h2>

        <table>
          <tr>
            <th></th>
            <th>Predicted Positive</th>
            <th>Predicted Negative</th>
          </tr>
          <tr>
            <th>Actual Positive</th>
            <td className="true-positive">TP</td>
            <td className="false-negative">FN</td>
          </tr>
          <tr>
            <th>Actual Negative</th>
            <td className="false-positive">FP</td>
            <td className="true-negative">TN</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
