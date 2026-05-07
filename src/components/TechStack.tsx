import React from 'react';
import { motion } from 'motion/react';
import {
  Cloud,
  Code2,
  Container,
  Database,
  Feather,
  Layers,
  Leaf,
  Server,
  Terminal,
  Triangle,
} from 'lucide-react';
import { cn } from '../lib/utils';

export const TechStack = () => {
  const [failedIcons, setFailedIcons] = React.useState<Record<string, boolean>>({});

  const fallbackIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    React: Code2,
    'Next.js': Layers,
    Tailwind: Feather,
    Angular: Triangle,
    'Spring Boot': Leaf,
    'Node.js': Terminal,
    'C#': Code2,
    Python: Code2,
    PHP: Code2,
    Yii: Server,
    Docker: Container,
    AWS: Cloud,
    Postgres: Database,
    'SQL Server': Database,
  };

  const handleIconError = (name: string) => {
    setFailedIcons((prev) => (prev[name] ? prev : {...prev, [name]: true}));
  };

  const categories = [
    {
      name: 'Frontend',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      techs: [
        { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/000000' },
        { name: 'Tailwind', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        { name: 'Angular', url: 'https://cdn.simpleicons.org/angular/DD0031' },
      ]
    },
    {
      name: 'Backend',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      techs: [
        { name: 'Spring Boot', url: 'https://cdn.simpleicons.org/springboot/6DB33F' },
        { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'C#', url: 'https://cdn.simpleicons.org/csharp/239120' },
        { name: 'Python', url: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'PHP', url: 'https://cdn.simpleicons.org/php/777BB4' },
        { name: 'Yii', url: 'https://cdn.simpleicons.org/yiiframework/00a8e1' },
      ]
    },
    {
      name: 'Infrastructure',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
      techs: [
        { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/2496ED' },
        { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' },
        { name: 'Postgres', url: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'SQL Server', url: 'https://cdn.simpleicons.org/microsoftsqlserver/CC2927' },
      ]
    }
  ];

  return (
    <section id="tech" className="px-12 py-24 lg:py-32 bg-white dark:bg-slate-900 relative border-y border-border">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl lg:text-6xl font-display font-extrabold text-foreground tracking-tighter leading-none">
            The SakiSofts <span className="text-primary italic">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted font-medium">We use only the most reliable and forward-thinking technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-border shadow-sleek space-y-8 h-full"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${cat.bg.replace('/10', '')}`} />
                <h4 className={`text-[10px] uppercase font-bold tracking-[0.2em] ${cat.color}`}>
                  {cat.name}
                </h4>
              </div>

              <div className="flex flex-wrap gap-8 items-center">
                {cat.techs.map((tech) => (
                  (() => {
                    const FallbackIcon = fallbackIcons[tech.name] ?? Code2;
                    const useFallback = failedIcons[tech.name];

                    return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 group cursor-default"
                  >
                    <div className="w-10 h-10 flex items-center justify-center transition-all duration-300">
                      {useFallback ? (
                        <FallbackIcon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
                      ) : (
                        <img
                          src={tech.url}
                          alt={tech.name}
                          className={cn(
                            "w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110",
                            (tech.name === "Next.js") && "dark:invert"
                          )}
                          referrerPolicy="no-referrer"
                          onError={() => handleIconError(tech.name)}
                        />
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-muted transition-colors group-hover:text-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                    );
                  })()
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
