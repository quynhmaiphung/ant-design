import React from 'react';
import type { StepsProps } from 'antd';
import { Popover, Steps } from 'antd';

const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const App: React.FC = () => (
  <Steps
    current={1}
    progressDot={customDot}
    items={[
      {
        title: 'Submitted',
        description,
      },
      {
        title: 'Assistant reviewing',
        description,
      },
      {
        title: 'Finance Director reviewing',
        description,
      },
      {
        title: 'Completed',
        description,
      },
    ]}
  />
);

export default App;
