// SANJITH SHETTY - FOUNDER OS - INTERACTIVE APPLICATION LOGIC

let appData = null;
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  initTheme();
  renderAllSections();
  setupEventListeners();
});

// Load Data from LocalStorage or Fallback to DEFAULT_FOUNDER_DATA
function loadData() {
  const saved = localStorage.getItem('SANJITH_FOUNDER_OS_DATA');
  if (saved) {
    try {
      appData = JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing stored data, using default', e);
      appData = JSON.parse(JSON.stringify(DEFAULT_FOUNDER_DATA));
    }
  } else {
    appData = JSON.parse(JSON.stringify(DEFAULT_FOUNDER_DATA));
    saveData();
  }
}

function saveData() {
  localStorage.setItem('SANJITH_FOUNDER_OS_DATA', JSON.stringify(appData));
}

// Theme handling
function initTheme() {
  const savedTheme = localStorage.getItem('FOUNDER_OS_THEME') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('FOUNDER_OS_THEME', isLight ? 'light' : 'dark');
  updateThemeIcon(isLight);
  rebuildCharts();
}

function updateThemeIcon(isLight) {
  const icon = document.getElementById('themeToggleIcon');
  if (icon) {
    icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
}

// Navigation
function navigateSection(e, sectionId) {
  if (e) e.preventDefault();
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  if (e && e.currentTarget) e.currentTarget.classList.add('active');
  
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Render All Sections
function renderAllSections() {
  renderVitals();
  renderPriorities();
  renderVentures();
  renderKanban();
  renderMeetings();
  renderDecisions();
  renderMirorSection();
  renderPeopleSection();
  renderFinanceSection();
  renderGrowthSection();
  renderBrandSection();
  renderProjectsSection();
  renderRisksSection();
  renderRelationshipsSection();
  renderPersonalSection();
  renderWeeklyReview();
  initCharts();
}

// 1. Vitals
function renderVitals() {
  const v = appData.founder.vitals;
  const container = document.getElementById('vitalsContainer');
  if (!container) return;

  const vitalsList = [
    { key: 'businessHealth', label: 'Business Health', icon: 'fa-heart-pulse', val: v.businessHealth.score + '/100', sub: v.businessHealth.trend, state: v.businessHealth.state },
    { key: 'revenueGrowth', label: 'Portfolio Revenue', icon: 'fa-chart-line', val: v.revenueGrowth.score, sub: v.revenueGrowth.status, state: v.revenueGrowth.state },
    { key: 'cashRunway', label: 'Cash & Runway', icon: 'fa-vault', val: v.cashRunway.score, sub: v.cashRunway.status, state: v.cashRunway.state },
    { key: 'teamHealth', label: 'Team eNPS', icon: 'fa-users', val: v.teamHealth.score, sub: v.teamHealth.trend, state: v.teamHealth.state },
    { key: 'customerHealth', label: 'Customer NPS', icon: 'fa-face-smile', val: v.customerHealth.score, sub: v.customerHealth.trend, state: v.customerHealth.state },
    { key: 'marketingBrand', label: 'Marketing ROAS', icon: 'fa-bullhorn', val: v.marketingBrand.score, sub: v.marketingBrand.trend, state: v.marketingBrand.state },
    { key: 'workload', label: 'Founder Workload', icon: 'fa-brain', val: v.workload.score, sub: v.workload.trend, state: v.workload.state }
  ];

  container.innerHTML = vitalsList.map(item => `
    <div class="vital-card ${item.state}">
      <div class="vital-head">
        <span class="vital-label">${item.label}</span>
        <span class="vital-state-dot ${item.state}"></span>
      </div>
      <div class="vital-value">${item.val}</div>
      <div class="vital-sub">${item.sub}</div>
    </div>
  `).join('');
}

// 2. Priorities
function renderPriorities() {
  const container = document.getElementById('prioritiesContainer');
  if (!container) return;

  const prios = appData.todayPriorities;
  container.innerHTML = prios.map((p, idx) => `
    <div class="priority-card ${p.completed ? 'completed' : ''}" draggable="true" ondragstart="handlePrioDragStart(event, ${idx})">
      <div class="prio-top">
        <span class="prio-badge ${p.badge.toLowerCase()}">${p.company}</span>
        <span class="prio-importance ${p.importance.toLowerCase()}"><i class="fa-solid fa-circle-exclamation"></i> ${p.importance} Priority</span>
      </div>
      <div class="prio-title" style="${p.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">
        ${p.title}
      </div>
      <div class="prio-footer">
        <span><i class="fa-regular fa-clock"></i> ${p.deadline}</span>
        <div class="prio-actions">
          <button class="icon-btn" onclick="togglePriorityComplete(${idx})" title="Toggle Complete">
            <i class="fa-solid ${p.completed ? 'fa-arrow-rotate-left' : 'fa-circle-check'}" style="${p.completed ? 'color: var(--text-muted);' : 'color: var(--success);'}"></i>
          </button>
          <button class="icon-btn" onclick="deletePriority(${idx})" title="Delete Priority">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function togglePriorityComplete(idx) {
  appData.todayPriorities[idx].completed = !appData.todayPriorities[idx].completed;
  saveData();
  renderPriorities();
}

function deletePriority(idx) {
  appData.todayPriorities.splice(idx, 1);
  saveData();
  renderPriorities();
}

function openAddPriorityModal() {
  document.getElementById('addPriorityModal').classList.add('active');
}

function closeAddPriorityModal() {
  document.getElementById('addPriorityModal').classList.remove('active');
}

function saveNewPriority(e) {
  e.preventDefault();
  const title = document.getElementById('prioTitleInput').value;
  const company = document.getElementById('prioCompanyInput').value;
  const deadline = document.getElementById('prioDeadlineInput').value;
  const importance = document.getElementById('prioImportanceInput').value;

  appData.todayPriorities.unshift({
    id: 'prio-' + Date.now(),
    title,
    company,
    badge: company.includes('Miror') ? 'Miror' : (company.includes('Shetty') ? 'Shetty Capital' : 'Portfolio'),
    deadline,
    importance,
    status: 'Pending',
    owner: 'Sanjith Shetty',
    risk: 'Medium',
    completed: false
  });

  saveData();
  renderPriorities();
  closeAddPriorityModal();
  document.getElementById('priorityForm').reset();
}

// 3. Ventures
function renderVentures() {
  const container = document.getElementById('venturesContainer');
  if (!container) return;

  container.innerHTML = appData.ventures.map(v => `
    <div class="card" style="border-top: 3px solid ${v.badgeColor};">
      <div class="card-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 36px; height: 36px; border-radius: 8px; background: ${v.badgeColor}22; color: ${v.badgeColor}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
            <i class="fa-solid ${v.icon}"></i>
          </div>
          <div>
            <h4 style="font-size: 15px; font-weight: 800;">${v.name}</h4>
            <div style="font-size: 11px; color: var(--text-muted);">${v.category}</div>
          </div>
        </div>
        <span class="badge badge-green">${v.healthScore}% Health</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; padding: 10px; background: var(--bg-surface); border-radius: 8px;">
        <div>
          <div style="font-size: 10.5px; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Monthly Revenue</div>
          <div style="font-family: var(--font-mono); font-size: 16px; font-weight: 700;">${v.revenue}</div>
        </div>
        <div>
          <div style="font-size: 10.5px; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Growth</div>
          <div style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: var(--success);">${v.growth}</div>
        </div>
      </div>

      <div style="font-size: 12px; display: flex; flex-direction: column; gap: 6px;">
        <div><strong style="color: var(--primary-light);">Top Priority:</strong> ${v.keyPriority}</div>
        <div><strong style="color: var(--danger);">Major Risk:</strong> ${v.majorRisk}</div>
        <div><strong style="color: var(--text-muted);">Next Milestone:</strong> ${v.nextMilestone}</div>
      </div>
    </div>
  `).join('');
}

function openAddVentureModal() {
  document.getElementById('addVentureModal').classList.add('active');
}
function closeAddVentureModal() {
  document.getElementById('addVentureModal').classList.remove('active');
}
function saveNewVenture(e) {
  e.preventDefault();
  const name = document.getElementById('ventNameInput').value;
  const category = document.getElementById('ventCategoryInput').value;
  const revenue = document.getElementById('ventRevenueInput').value;
  const keyPriority = document.getElementById('ventPriorityInput').value;
  const majorRisk = document.getElementById('ventRiskInput').value;

  appData.ventures.push({
    id: 'v-' + Date.now(),
    name,
    category,
    role: 'Founder / Director',
    healthScore: 80,
    status: 'Active',
    revenue: revenue || '₹10.0L / mo',
    growth: '+10.0%',
    keyPriority,
    majorRisk,
    nextMilestone: 'Scale & Operationalize',
    badgeColor: '#6366f1',
    icon: 'fa-briefcase'
  });

  saveData();
  renderVentures();
  closeAddVentureModal();
  document.getElementById('ventureForm').reset();
}

// 4. Kanban Tasks
function renderKanban() {
  const cols = ['todo', 'in-progress', 'waiting', 'completed'];
  cols.forEach(col => {
    const area = document.getElementById(`kanban-${col}`);
    const countSpan = document.getElementById(`count-${col}`);
    if (!area) return;

    const filtered = appData.tasks.filter(t => t.status === col);
    if (countSpan) countSpan.textContent = filtered.length;

    area.innerHTML = filtered.map(t => `
      <div class="task-card" draggable="true" ondragstart="handleTaskDragStart(event, '${t.id}')">
        <div class="task-header">
          <span class="prio-badge ${t.company.toLowerCase()}">${t.company}</span>
          <span class="badge ${t.priority === 'Critical' ? 'badge-red' : (t.priority === 'High' ? 'badge-amber' : 'badge-blue')}">${t.priority}</span>
        </div>
        <div class="task-title">${t.title}</div>
        <div class="task-meta">
          <span><i class="fa-regular fa-calendar"></i> ${t.deadline}</span>
          <span><i class="fa-regular fa-user"></i> ${t.owner}</span>
        </div>
      </div>
    `).join('');
  });
}

let draggedTaskId = null;
function handleTaskDragStart(e, id) {
  draggedTaskId = id;
  e.dataTransfer.setData('text/plain', id);
}

function handleKanbanDrop(e, targetStatus) {
  e.preventDefault();
  const task = appData.tasks.find(t => t.id === draggedTaskId);
  if (task) {
    task.status = targetStatus;
    saveData();
    renderKanban();
  }
}
function handleKanbanDragOver(e) {
  e.preventDefault();
}

function openAddTaskModal() {
  document.getElementById('addTaskModal').classList.add('active');
}
function closeAddTaskModal() {
  document.getElementById('addTaskModal').classList.remove('active');
}
function saveNewTask(e) {
  e.preventDefault();
  const title = document.getElementById('taskTitleInput').value;
  const company = document.getElementById('taskCompanyInput').value;
  const priority = document.getElementById('taskPriorityInput').value;
  const owner = document.getElementById('taskOwnerInput').value;
  const deadline = document.getElementById('taskDeadlineInput').value;

  appData.tasks.unshift({
    id: 't-' + Date.now(),
    title,
    company,
    priority,
    owner: owner || 'Sanjith Shetty',
    deadline: deadline || 'This Week',
    status: 'todo',
    category: 'TODAY'
  });

  saveData();
  renderKanban();
  closeAddTaskModal();
  document.getElementById('taskForm').reset();
}

// 5. Meetings
function renderMeetings() {
  const container = document.getElementById('meetingsContainer');
  if (!container) return;

  container.innerHTML = appData.meetings.map(m => `
    <div class="card" style="padding: 16px; border-left: 3px solid ${m.importance === 'Critical' ? 'var(--danger)' : 'var(--primary)'};">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div>
          <span style="font-family: var(--font-mono); font-size: 11.5px; color: var(--primary-light); font-weight: 700;">${m.time}</span>
          <h4 style="font-size: 14.5px; font-weight: 700; margin-top: 3px;">${m.title}</h4>
          <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">
            <strong>${m.company}</strong> • Participants: ${m.participants}
          </div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
            <i class="fa-solid fa-location-dot"></i> ${m.location}
          </div>
        </div>
        <button class="btn btn-outline" style="font-size: 11px; padding: 5px 10px;" onclick="openMeetingActionModal('${m.title}')">
          <i class="fa-solid fa-clipboard-check"></i> Record Action
        </button>
      </div>
    </div>
  `).join('');
}

function openMeetingActionModal(meetingTitle) {
  document.getElementById('meetingTitleContext').textContent = meetingTitle;
  document.getElementById('meetingActionModal').classList.add('active');
}
function closeMeetingActionModal() {
  document.getElementById('meetingActionModal').classList.remove('active');
}
function saveMeetingAction(e) {
  e.preventDefault();
  const decision = document.getElementById('meetingDecisionInput').value;
  const actionItem = document.getElementById('meetingActionItemInput').value;
  const owner = document.getElementById('meetingOwnerInput').value;
  const deadline = document.getElementById('meetingDeadlineInput').value;

  if (actionItem) {
    appData.tasks.unshift({
      id: 't-' + Date.now(),
      title: actionItem + ` (from mtg: ${decision})`,
      company: 'Miror',
      priority: 'High',
      owner: owner || 'Sanjith Shetty',
      deadline: deadline || 'In 48 Hours',
      status: 'todo',
      category: 'TODAY'
    });
    saveData();
    renderKanban();
  }

  closeMeetingActionModal();
  document.getElementById('meetingActionForm').reset();
  alert('Action item recorded and synced to your Task Kanban!');
}

// 6. Decisions
function renderDecisions() {
  const container = document.getElementById('decisionsContainer');
  if (!container) return;

  container.innerHTML = appData.decisions.map(d => `
    <div class="decision-card ${d.riskLevel.toLowerCase()}">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="prio-badge miror">${d.company}</span>
        <span class="badge ${d.riskLevel === 'Critical' ? 'badge-red' : 'badge-amber'}">${d.riskLevel} Risk</span>
      </div>
      <h4 style="font-size: 15px; font-weight: 800;">${d.title}</h4>
      <p style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.4;">${d.background}</p>
      <div style="background: var(--bg-surface); padding: 10px; border-radius: 6px; font-size: 12px;">
        <div><strong>Options:</strong> ${d.options}</div>
        <div style="margin-top: 4px;"><strong>Impact:</strong> <span style="color: var(--success); font-weight: 700;">${d.financialImpact}</span></div>
        <div style="margin-top: 4px;"><strong style="color: var(--primary-light);">Recommended Action:</strong> ${d.recommendedAction}</div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 10px;">
        <span style="font-size: 11.5px; color: var(--danger); font-weight: 700;"><i class="fa-regular fa-clock"></i> Deadline: ${d.deadline}</span>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-primary" style="font-size: 11px; padding: 5px 12px;" onclick="approveDecision('${d.id}')">Approve</button>
          <button class="btn btn-outline" style="font-size: 11px; padding: 5px 12px;" onclick="delegateDecision('${d.id}')">Delegate</button>
        </div>
      </div>
    </div>
  `).join('');
}

function approveDecision(id) {
  const dec = appData.decisions.find(d => d.id === id);
  if (dec) {
    alert(`Decision "${dec.title}" marked as Approved!`);
    appData.decisions = appData.decisions.filter(d => d.id !== id);
    saveData();
    renderDecisions();
  }
}

function delegateDecision(id) {
  const assignee = prompt('Enter assignee name to delegate this decision to:');
  if (assignee) {
    alert(`Decision delegated to ${assignee}.`);
    appData.decisions = appData.decisions.filter(d => d.id !== id);
    saveData();
    renderDecisions();
  }
}

// 7. Miror Section
function renderMirorSection() {
  const m = appData.miror;
  
  // Render offerings grid
  const offeringsContainer = document.getElementById('mirorOfferingsContainer');
  if (offeringsContainer && m.offerings) {
    offeringsContainer.innerHTML = m.offerings.map(o => `
      <div class="card" style="border-top: 3px solid var(--accent-miror); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span class="badge" style="background: rgba(236, 72, 153, 0.15); color: #ec4899; font-weight: 700;">${o.badge}</span>
            <span style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">${o.category}</span>
          </div>
          <h4 style="font-size: 14.5px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">${o.name}</h4>
          <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">${o.desc}</p>
        </div>
        <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border-light); font-size: 11.5px; font-family: var(--font-mono); font-weight: 700; color: var(--primary-light);">
          <i class="fa-solid fa-chart-simple"></i> ${o.stats}
        </div>
      </div>
    `).join('');
  }

  const f = document.getElementById('mirorFunnelContainer');
  if (f) {
    f.innerHTML = m.funnel.map(stage => `
      <div class="funnel-row">
        <div class="funnel-content">
          <span class="funnel-stage-name">${stage.stage}</span>
          <div class="funnel-stage-data">
            <span>${stage.count}</span>
            <span style="color: var(--accent-miror);">${stage.conv}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  const initTbody = document.getElementById('mirorInitiativesBody');
  if (initTbody) {
    initTbody.innerHTML = m.initiatives.map(i => `
      <tr>
        <td><strong>${i.name}</strong></td>
        <td>${i.owner}</td>
        <td><span class="badge ${i.status === 'On Track' ? 'badge-green' : (i.status === 'In Progress' ? 'badge-blue' : 'badge-red')}">${i.status}</span></td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="flex: 1; height: 6px; background: var(--bg-surface); border-radius: 4px; overflow: hidden;">
              <div style="width: ${i.progress}%; height: 100%; background: var(--accent-miror);"></div>
            </div>
            <span>${i.progress}%</span>
          </div>
        </td>
        <td>${i.deadline}</td>
        <td><span class="badge ${i.risk === 'Low' ? 'badge-green' : (i.risk === 'Medium' ? 'badge-amber' : 'badge-red')}">${i.risk}</span></td>
      </tr>
    `).join('');
  }
}

// 8. People Section
function renderPeopleSection() {
  const p = appData.people;
  const attBody = document.getElementById('peopleAttentionBody');
  if (attBody) {
    attBody.innerHTML = p.criticalAttention.map(c => `
      <tr>
        <td><strong>${c.name}</strong><br><span style="font-size: 11px; color: var(--text-muted);">${c.role}</span></td>
        <td><span class="prio-badge miror">${c.company}</span></td>
        <td style="color: var(--danger); font-size: 12px;">${c.issue}</td>
        <td><strong>${c.action}</strong></td>
      </tr>
    `).join('');
  }
}

// 9. Finance Section
function renderFinanceSection() {
  const f = appData.finance;
  const payBody = document.getElementById('upcomingPaymentsBody');
  if (payBody) {
    payBody.innerHTML = f.upcomingMajorPayments.map(p => `
      <tr>
        <td><strong>${p.item}</strong></td>
        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--danger);">${p.amount}</td>
        <td>${p.due}</td>
      </tr>
    `).join('');
  }
}

// 10. Growth Section
function renderGrowthSection() {
  const g = appData.salesPipeline;
  const pipeBody = document.getElementById('salesPipelineBody');
  if (pipeBody) {
    pipeBody.innerHTML = g.stages.map(s => `
      <tr>
        <td><strong>${s.stage}</strong></td>
        <td>${s.count} deals</td>
        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-light);">₹${s.valueCr} Cr</td>
      </tr>
    `).join('');
  }
}

// 11. Brand Section
function renderBrandSection() {
  const b = appData.brandMarketing;
  const calBody = document.getElementById('contentCalendarBody');
  if (calBody) {
    calBody.innerHTML = b.contentCalendar.map(c => `
      <tr>
        <td><strong>${c.date}</strong></td>
        <td><span class="badge badge-blue">${c.platform}</span></td>
        <td>${c.topic}</td>
        <td><span class="badge ${c.status === 'Ready for Approval' ? 'badge-amber' : 'badge-green'}">${c.status}</span></td>
        <td>${c.owner}</td>
      </tr>
    `).join('');
  }
}

// 12. Projects Section
function renderProjectsSection() {
  const pr = appData.projects;
  const pBody = document.getElementById('allProjectsBody');
  if (pBody) {
    pBody.innerHTML = pr.map(proj => `
      <tr>
        <td><strong>${proj.name}</strong></td>
        <td><span class="prio-badge ${proj.company.toLowerCase().includes('miror') ? 'miror' : 'shetty'}">${proj.company}</span></td>
        <td>${proj.owner}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="flex: 1; height: 6px; background: var(--bg-surface); border-radius: 4px; overflow: hidden;">
              <div style="width: ${proj.progress}%; height: 100%; background: var(--primary);"></div>
            </div>
            <span>${proj.progress}%</span>
          </div>
        </td>
        <td>${proj.budget}</td>
        <td><span class="badge ${proj.status === 'In Progress' ? 'badge-blue' : (proj.status === 'Near Completion' ? 'badge-green' : 'badge-red')}">${proj.status}</span></td>
        <td><span class="badge ${proj.risk === 'Low' ? 'badge-green' : (proj.risk === 'Medium' ? 'badge-amber' : 'badge-red')}">${proj.risk}</span></td>
      </tr>
    `).join('');
  }
}

// 13. Risks Section
function renderRisksSection() {
  const container = document.getElementById('risksListContainer');
  if (!container) return;

  const risks = [
    { level: 'Critical', icon: 'fa-circle-xmark', color: 'var(--danger)', title: 'Series A Term Sheet Clause Discrepancy', desc: '15% ESOP dilution vs 12% agreed term with lead investor Peak XV.', action: 'Review and sign compromise today before 4:00 PM' },
    { level: 'High', icon: 'fa-triangle-exclamation', color: 'var(--warning)', title: 'Omnichannel Retail Launch Delayed by 2 Weeks', desc: 'Apollo packaging barcode compliance requiring reprint of 5,000 unit batch.', action: 'Expedite packaging vendor reprint in Bengaluru' },
    { level: 'Medium', icon: 'fa-clock', color: 'var(--info)', title: 'Senior Tech Positions Overdue >45 Days', desc: 'Engineering velocity at risk of decelerating without senior backend lead.', action: 'Founder closing interview scheduled for 6:45 PM' }
  ];

  container.innerHTML = risks.map(r => `
    <div style="background: var(--bg-card); border-left: 4px solid ${r.color}; border-radius: 8px; padding: 14px 18px; margin-bottom: 10px; border-top: 1px solid var(--border); border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong style="color: var(--text-primary); font-size: 13.5px;"><i class="fa-solid ${r.icon}" style="color: ${r.color}; margin-right: 8px;"></i> ${r.title}</strong>
        <span class="badge ${r.level === 'Critical' ? 'badge-red' : (r.level === 'High' ? 'badge-amber' : 'badge-blue')}">${r.level}</span>
      </div>
      <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">${r.desc}</div>
      <div style="font-size: 11.5px; color: var(--primary-light); font-weight: 700; margin-top: 6px;"><i class="fa-solid fa-arrow-right"></i> ${r.action}</div>
    </div>
  `).join('');
}

// 14. Relationships Section
function renderRelationshipsSection() {
  const r = appData.relationships;
  const rBody = document.getElementById('relationshipsBody');
  if (rBody) {
    rBody.innerHTML = r.map(rel => `
      <tr>
        <td><strong>${rel.name}</strong></td>
        <td>${rel.org}</td>
        <td><span class="badge badge-blue">${rel.category}</span></td>
        <td>${rel.lastInteraction}</td>
        <td><strong style="color: ${rel.nextFollowUp.includes('Overdue') ? 'var(--danger)' : 'var(--text-primary)'};">${rel.nextFollowUp}</strong></td>
        <td><span class="badge ${rel.status === 'Active Lead' ? 'badge-green' : (rel.status === 'Attention Required' ? 'badge-red' : 'badge-blue')}">${rel.status}</span></td>
        <td>${rel.notes}</td>
      </tr>
    `).join('');
  }
}

// 15. Personal Section
function renderPersonalSection() {
  const p = appData.founder.personalMetrics;
  document.getElementById('personalMtgs').textContent = p.meetingHours + ' hrs';
  document.getElementById('personalDeep').textContent = p.deepWorkHours + ' hrs';
  document.getElementById('personalStrat').textContent = p.strategicWorkPct + '%';
  document.getElementById('personalOper').textContent = p.operationalWorkPct + '%';
}

// 16. Weekly Review
function renderWeeklyReview() {
  const w = appData.weeklyReview;
  document.getElementById('reviewWins').value = w.wins;
  document.getElementById('reviewChallenges').value = w.challenges;
  document.getElementById('reviewDecisions').value = w.decisionsMade;
  document.getElementById('reviewNextPriorities').value = w.nextWeekPriorities;
}

function saveWeeklyReview() {
  appData.weeklyReview.wins = document.getElementById('reviewWins').value;
  appData.weeklyReview.challenges = document.getElementById('reviewChallenges').value;
  appData.weeklyReview.decisionsMade = document.getElementById('reviewDecisionsMade').value;
  appData.weeklyReview.nextWeekPriorities = document.getElementById('reviewNextPriorities').value;
  saveData();
  alert('Weekly Review changes saved successfully!');
}

// Initialize All Chart.js Visualizations
function initCharts() {
  // Miror Revenue Trend Chart
  const mirorCtx = document.getElementById('mirorRevenueChart');
  if (mirorCtx) {
    const trend = appData.miror.marketing.monthlyTrend;
    charts.miror = new Chart(mirorCtx.getContext('2d'), {
      type: 'line',
      data: {
        labels: trend.map(t => t.month),
        datasets: [{
          label: 'Monthly Revenue (₹ Lakhs)',
          data: trend.map(t => t.revenue),
          borderColor: '#ec4899',
          backgroundColor: 'rgba(236, 72, 153, 0.12)',
          fill: true,
          tension: 0.35,
          borderWidth: 3
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  // Financial Trend Chart
  const finCtx = document.getElementById('financeTrendChart');
  if (finCtx) {
    const fin = appData.finance.monthlyTrend;
    charts.finance = new Chart(finCtx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: fin.map(f => f.month),
        datasets: [
          { label: 'Revenue (₹L)', data: fin.map(f => f.rev), backgroundColor: '#6366f1', borderRadius: 4 },
          { label: 'Burn (₹L)', data: fin.map(f => f.exp), backgroundColor: '#ef4444', borderRadius: 4 }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  // Founder Time Allocation Doughnut Chart
  const timeCtx = document.getElementById('founderTimeChart');
  if (timeCtx) {
    const alloc = appData.founder.personalMetrics.timeAllocation;
    charts.time = new Chart(timeCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: alloc.map(a => a.label),
        datasets: [{
          data: alloc.map(a => a.pct),
          backgroundColor: alloc.map(a => a.color),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 11 } } } },
        cutout: '70%'
      }
    });
  }
}

function rebuildCharts() {
  Object.values(charts).forEach(c => { if (c) c.destroy(); });
  initCharts();
}

function setupEventListeners() {
  // Keyboard shortcut Ctrl+K / Cmd+K for Quick Search/Action
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openAddPriorityModal();
    }
  });
}
