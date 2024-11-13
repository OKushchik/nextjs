import React from 'react';
import styles from './style.module.scss';
import {ChartPie} from "@/components/lib/recharts/ChartPie";
import {TinyBarChart} from "@/components/lib/recharts/TinyBarChart";
import {
  constStatusChartBackend,
  constStatusChartDesigners,
  constStatusChartFrontend, technologiesChartBackend,
  technologiesChartFrontend
} from "@/dt";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.diagram}>
        <h2 className={styles.diagram__title}>Workload</h2>
        <div className={styles.diagram__container}>
          <div className={styles.diagram__block}>
            <h3 className={styles.diagram__subtitle}>Frontend</h3>
            <ChartPie data={constStatusChartFrontend}/>
          </div>
          <div className={styles.diagram__block}>
            <h3 className={styles.diagram__subtitle}>Backend</h3>
            <ChartPie data={constStatusChartBackend}/>
          </div>
          <div className={styles.diagram__block}>
            <h3 className={styles.diagram__subtitle}>Designers</h3>
            <ChartPie data={constStatusChartDesigners}/>
          </div>

        </div>
      </section>
      <section className={styles.diagram}>
        <h2 className={styles.diagram__title}>Technologies</h2>
        <div className={styles.diagram__container}>
          <div className={styles.diagram__block}>
            <h3 className={styles.diagram__subtitle}>Frontend</h3>
            <TinyBarChart data={technologiesChartFrontend}/>
          </div>
          <div className={styles.diagram__block}>
            <h3 className={styles.diagram__subtitle}>Backend</h3>
            <TinyBarChart data={technologiesChartBackend}/>
          </div>
        </div>
      </section>
    </div>


  );
};

export default HomePage;