import { useEffect, useState } from 'react';

import { importLevelSVG } from '@/utils/level';

const LevelIcon = ({ level }: { level: number }) => {
  const [LevelSVG, setLevelSVG] = useState(null);

  useEffect(() => {
    const loadLevelSVG = async () => {
      try {
        const svg = await importLevelSVG(level);
        setLevelSVG(svg);
      } catch (error) {
        console.error('SVG 파일을 로드하는데 실패했습니다:', error);
      }
    };

    loadLevelSVG();
  }, [level]);

  return (
    <div>
      {LevelSVG ? <img width={'50px'} src={LevelSVG} alt={`Level ${level}`} /> : 'Loading...'}
    </div>
  );
};

export default LevelIcon;
