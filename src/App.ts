// Core
import { hyperscript as h } from '@/core/hyperscript';

// i18n
import { t } from '@/i18n';

// Components
import AtomBackground from '@/components/atom-background';
import ProjectGrid from '@/components/project-grid';

export default class App {
  private atomBackground: AtomBackground;
  private projectGrid: ProjectGrid;

  constructor() {
    this.atomBackground = new AtomBackground({
      animation: true,
      activeButtonText: t('atom-background.active-button-text'),
      inactiveButtonText: t('atom-background.inactive-button-text'),
    });
    this.projectGrid = new ProjectGrid();
  }

  public render(): HTMLElement[] {
    return [
      this.atomBackground.render(),
      h('div', { className: 'content' }, [
        this.projectGrid.render(),
      ]),
    ];
  }
}
