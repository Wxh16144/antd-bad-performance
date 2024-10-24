import * as React from 'react';
import * as _ from 'lodash-es'
import { Popover, Button, version } from 'antd'
import Modal from 'easy-antd-modal'

import { getConfig, cartesian } from '@local/shared'

type AnyObject = Record<any, any>

function App(props: AnyObject) {
  const { uniqID = 0, ...rest } = props;

  const [realProps] = React.useState(() => getConfig(rest));

  const [buttons] = React.useState(() => cartesian(...Object.values(realProps)));

  const nextUniqID = Number(uniqID) + 1;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {uniqID == 0 ? <h1>antd: v{version}</h1> : null}
      {
        buttons.map((button, index) => {
          const idx = index + 1;
          const _props: any = _.assignIn({}, ...button)

          return (
            <Modal
              title={`[antd:v${version}]-[${uniqID + 1}]-(${idx})`}
              key={`${uniqID}-${idx}`}
              width={`calc(90vw - ${Number(uniqID) * 50}px)`}
              bodyStyle={{
                height: `calc(80vh - ${Number(uniqID) * 50}px)`,
                overflowY: 'scroll'
              }}
              centered
              trigger={
                <Popover
                  trigger={"hover"}
                  content={(
                    <pre>
                      <code>
                        {JSON.stringify(_.omit(_props, ['icon']), null, 2)}
                      </code>
                    </pre>
                  )}
                >
                  <Button key={idx} {..._props} > Click</Button>
                </Popover>
              }
            >
              <div>
                <App uniqID={nextUniqID} />
              </div>
            </Modal >
          )
        })
      }
    </div >
  )
}

export default App;


