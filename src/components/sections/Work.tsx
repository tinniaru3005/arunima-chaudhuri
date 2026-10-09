import { work } from '../../data/work';
import { RichText } from '../ui/RichText';
import { Section } from '../ui/Section';
import './Work.css';

export function Work() {
  return (
    <Section id="work" kicker="the road so far" title="Where I've worked">
      <ol className="timeline">
        {work.map((job) => (
          <li key={job.role + job.when} className="job">
            <span className="job-dot" aria-hidden="true" />
            <div className="job-card">
              <div className="job-top">
                <h3>
                  {job.role} <span className="org">· {job.org}</span>
                </h3>
                <span className="when">{job.when}</span>
              </div>
              {job.points.length === 1 ? (
                <p className="job-plain">
                  <RichText parts={job.points[0]} />
                </p>
              ) : (
                <ul>
                  {job.points.map((pt, i) => (
                    <li key={i}>
                      <RichText parts={pt} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
