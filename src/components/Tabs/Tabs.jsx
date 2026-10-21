import { useState } from 'react';

export const Tabs = ({ tabs }) => {
  const [id, setId] = useState('');
  const tex = tabs.find(e => e.id === id);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(e => (
            <li
              key={e.id}
              className={id === e.id ? 'is-active' : ''}
              data-cy="Tab"
              onClick={() => setId(e.id)}
            >
              <a href={`${e.id}`} data-cy="TabLink">
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tex?.content}
      </div>
    </div>
  );
};
