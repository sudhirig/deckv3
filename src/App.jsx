import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import './styles/print.css'
import './styles/fixes.css'
import './styles/presentation.css'
import './utils/presentationMode.js'
import SlideViewport from './components/SlideViewport'
import ActDropdown from './components/ActDropdown'
import ExportDashboard from './components/ExportDashboard'
import { EditModeProvider, useEditMode } from './contexts/EditModeContext'
import EditModeBar from './components/EditModeBar'
import TitleSlide from './slides/TitleSlide'
import ExecutiveSummarySlide from './slides/ExecutiveSummarySlide'
import AgendaRoadmapSlide from './slides/AgendaRoadmapSlide'
import Act1Slide from './slides/Act1Slide'
import StanfordSlide from './slides/StanfordSlide'
import MarketSwitchingSlide from './slides/MarketSwitchingSlide'
import AlphaGapSlide from './slides/AlphaGapSlide'
import Act2Slide from './slides/Act2Slide'
import ThreeAlphaAgentsSlide from './slides/ThreeAlphaAgentsSlide'
import Act3Slide from './slides/Act3Slide'
import IndiaProblemSlide from './slides/IndiaProblemSlide'
import GIFTSolutionSlide from './slides/GIFTSolutionSlide'
import AlternativeAIDDSlide from './slides/AlternativeAIDDSlide'
import AgentArchitectureSlideNew from './slides/AgentArchitectureSlideNew'
import Act4Slide from './slides/Act4Slide'
import LivePlatformSlide from './slides/LivePlatformSlide'
import TractionDashboardSlide from './slides/TractionDashboardSlide'
import WhyWeWinSlide from './slides/WhyWeWinSlide'
import Act5Slide from './slides/Act5Slide'
import OpportunitySlide from './slides/OpportunitySlide'
import ValueCreationSlide from './slides/ValueCreationSlide'
import GrowthPathSlide from './slides/GrowthPathSlide'
import TeamSlide from './slides/TeamSlide'
import FundingSlide from './slides/FundingSlide'
import AppendixSlide from './slides/AppendixSlide'
// New ARIA transformation slides
import IntroducingARIASlide from './slides/IntroducingARIASlide'
import WedgeExpandSlide from './slides/WedgeExpandSlide'
import B2B2CDistributionSlide from './slides/B2B2CDistributionSlide'
import ARIAFundManagerSlide from './slides/ARIAFundManagerSlide'
import DigitalFamilyOfficeOSSlide from './slides/DigitalFamilyOfficeOSSlide'
import USTechStrategySlide from './slides/USTechStrategySlide'
import GoToMarketSlide from './slides/GoToMarketSlide'
// New Agentic AI Value Slides (First Batch)
import AgentOrchestraSlide from './slides/AgentOrchestraSlide'
import AgentAutonomySlide from './slides/AgentAutonomySlide'
import IntelligenceMultiplierSlide from './slides/IntelligenceMultiplierSlide'
import GlassBoxAISlide from './slides/GlassBoxAISlide'
import AgentROICalculatorSlide from './slides/AgentROICalculatorSlide'
// New Agentic AI Deep Dive Slides (Second Batch - Fiscalix/AssureCare Inspired)
import EvolutionOfWealthTechSlide from './slides/EvolutionOfWealthTechSlide'
import ARIASwarmSlide from './slides/ARIASwarmSlide'
import ARIAInActionSlide from './slides/ARIAInActionSlide'
import HybridTrustModelSlide from './slides/HybridTrustModelSlide'
import AgenticValuePropSlide from './slides/AgenticValuePropSlide'
import PersonalizationAtScaleSlide from './slides/PersonalizationAtScaleSlide'
import PersonalizationAtScaleFixed from './slides/PersonalizationAtScaleFixed'
import YourAICEOatWorkSlide from './slides/YourAICEOatWorkSlide'
import YourAICEOatWorkFixed from './slides/YourAICEOatWorkFixed'
import AgenticSymphonySlide from './slides/AgenticSymphonySlide'
import AgenticSymphonyFixed from './slides/AgenticSymphonyFixed'
import ARIALiveDemoSlide from './slides/ARIALiveDemoSlide'
import PrototypeValidatedSlide from './slides/PrototypeValidatedSlide'
import ARIALiquidityEventSlide from './slides/ARIALiquidityEventSlide'
import WhyARIAWinsSlide from './slides/WhyARIAWinsSlide'
import StrategicPartnershipsSlide from './slides/StrategicPartnershipsSlide'
import StrategicPartnershipsSlideV2 from './slides/StrategicPartnershipsSlideV2'
import VoraVenturesSlide from './slides/VoraVenturesSlide'
import VoraVenturesFixed from './slides/VoraVenturesFixed'
// New Appendix Slides (First Batch)
import TechStackAPISlide from './slides/TechStackAPISlide'
import AgenticMoatSlide from './slides/AgenticMoatSlide'
import AIEquityAgentSlide from './slides/AIEquityAgentSlide'
import MarketSizingSlide from './slides/MarketSizingSlide'
import AgenticWorkflowSlide from './slides/AgenticWorkflowSlide'
// New Appendix Slides (Second Batch)
import LargestMarketSlide from './slides/LargestMarketSlide'
import MarketInMotionSlide from './slides/MarketInMotionSlide'
import ThreeCoreFailuresSlide from './slides/ThreeCoreFailuresSlide'
import AdvisorShortageSlide from './slides/AdvisorShortageSlide'
import TraditionalAdviceFailsSlide from './slides/TraditionalAdviceFailsSlide'
// New Appendix Slides (Third Batch)
import ThreeFailuresComparisonSlide from './slides/ThreeFailuresComparisonSlide'
import AlternativeAssetAgentSlide from './slides/AlternativeAssetAgentSlide'
import AIInvestmentCommitteeSlide from './slides/AIInvestmentCommitteeSlide'
import ThreeAlphaAgentsMoatSlide from './slides/ThreeAlphaAgentsMoatSlide'
import TechArchitecture1Slide from './slides/TechArchitecture1Slide'
import TechArchitecture2Slide from './slides/TechArchitecture2Slide'
import TechArchitecture3Slide from './slides/TechArchitecture3Slide'
import CompetitiveMatrixSlide from './slides/CompetitiveMatrixSlide'
import FinancialProjections1Slide from './slides/FinancialProjections1Slide'
import FinancialProjections2Slide from './slides/FinancialProjections2Slide'
import FinancialProjections3Slide from './slides/FinancialProjections3Slide'
import RiskMitigation1Slide from './slides/RiskMitigation1Slide'
import RiskMitigation2Slide from './slides/RiskMitigation2Slide'
import ExitStrategySlide from './slides/ExitStrategySlide'
import PartnershipStrategy1Slide from './slides/PartnershipStrategy1Slide'
import PartnershipStrategy2Slide from './slides/PartnershipStrategy2Slide'
import ClosingCommitmentSlide from './slides/ClosingCommitmentSlide'

// Redesigned World-Class Slides
import ExecutiveHookSlide from './slides/redesigned/ExecutiveHookSlide'
import PerfectStormSlide from './slides/redesigned/PerfectStormSlide'
import AdvisorCrisisSlide from './slides/redesigned/AdvisorCrisisSlide'
import ARIAatWorkSlide from './slides/redesigned/ARIAatWorkSlide'
import ZerodhaIntelligence from './slides/redesigned/ZerodhaIntelligence'
import CGMFAdvisory from './slides/redesigned/CGMFAdvisory'
import AgenticAICore from './slides/redesigned/AgenticAICore'
import AlgoTradingLab from './slides/redesigned/AlgoTradingLab'
import TradingExecution from './slides/redesigned/TradingExecution'
import SentimentAnalysis from './slides/redesigned/SentimentAnalysis'
import FutureVision from './slides/redesigned/FutureVision'
import ProofPointsGrid from './slides/redesigned/ProofPointsGrid'
import CompetitiveMoats from './slides/redesigned/CompetitiveMoats'
import CompetitiveMoatsFixed from './slides/CompetitiveMoatsFixed'
import BusinessModelComplete from './slides/redesigned/BusinessModelComplete'
import BusinessModelCompleteFixed from './slides/BusinessModelCompleteFixed'
import PartnershipEcosystem from './slides/redesigned/PartnershipEcosystem'
import FundingAsk from './slides/redesigned/FundingAsk'
import ZerodhaIntelligenceFixed from './slides/ZerodhaIntelligenceFixed'
import AgenticAICoreFixed from './slides/AgenticAICoreFixed'
import FundingAskFixed from './slides/FundingAskFixed'
import GIFTExecutionSlide from './slides/GIFTExecutionSlide'
import ARIAClientJourneySlideNew from './slides/ARIAClientJourneySlideNew'
import RoadmapSlide from './slides/RoadmapSlide'

// Product Appendix Slides - Chapter 1: Zerodha
import ZerodhaConceptSlide from './slides/ZerodhaConceptSlide'
import ZerodhaFeaturesSlide from './slides/ZerodhaFeaturesSlide'
import ZerodhaLiveSnapshotSlide from './slides/ZerodhaLiveSnapshotSlide'
// Product Appendix Slides - Chapter 2: CGMF
import CGMFConceptSlide from './slides/CGMFConceptSlide'
import CGMFFeaturesSlide from './slides/CGMFFeaturesSlide'
import CGMFLiveSnapshotSlide from './slides/CGMFLiveSnapshotSlide'
// Product Appendix Slides - Chapter 3: Agentic AI
import AgenticAIConceptSlide from './slides/AgenticAIConceptSlide'
import AgenticAIFeaturesSlide from './slides/AgenticAIFeaturesSlide'
import AgenticAILiveSnapshotSlide from './slides/AgenticAILiveSnapshotSlide'
// Product Appendix Slides - Chapter 4: Future Modules
import FutureModulesConceptSlide from './slides/FutureModulesConceptSlide'
import FutureModulesFeaturesSlide from './slides/FutureModulesFeaturesSlide'
import FutureModulesLiveSnapshotSlide from './slides/FutureModulesLiveSnapshotSlide'
// Product Appendix Slides - Chapter 5: Trading Agents
import TradingAgentsConceptSlide from './slides/TradingAgentsConceptSlide'
import TradingAgentsFeaturesSlide from './slides/TradingAgentsFeaturesSlide'
import TradingAgentsLiveSnapshotSlide from './slides/TradingAgentsLiveSnapshotSlide'
// Product Appendix Slides - Chapter 6: Algo Trading
import AlgoTradingConceptSlide from './slides/AlgoTradingConceptSlide'
import AlgoTradingFeaturesSlide from './slides/AlgoTradingFeaturesSlide'
import AlgoTradingLiveSnapshotSlide from './slides/AlgoTradingLiveSnapshotSlide'
// Product Appendix Slides - Chapter 7: Sentiment Module
import SentimentModuleConceptSlide from './slides/SentimentModuleConceptSlide'
import SentimentModuleFeaturesSlide from './slides/SentimentModuleFeaturesSlide'
import SentimentModuleLiveSnapshotSlide from './slides/SentimentModuleLiveSnapshotSlide'
// Supporting Enhancement Slides
import LiveMetricsDashboardSlide from './slides/LiveMetricsDashboardSlide'
import ProductOverviewSlide from './slides/ProductOverviewSlide'
import IndiaGatewaySlide from './slides/IndiaGatewaySlide'
import TechValidationSlide from './slides/TechValidationSlide'
import TestVisualsSlide from './slides/TestVisualsSlide'
// New ARIA Platform Experience Slides
import ARIAPlatformExperienceSlide from './slides/ARIAPlatformExperienceSlide'
import ARIAClientJourneySlide from './slides/ARIAClientJourneySlide'
// New Competitive Analysis Slides
import ARIATechMFSlide from './slides/ARIATechMFSlide'
import ARIAInvestmentAdvisorySlide from './slides/ARIAInvestmentAdvisorySlide'
import ARIAGoalBasedInvestingSlide from './slides/ARIAGoalBasedInvestingSlide'
import ARIAAIFSlide from './slides/ARIAAIFSlide'

// CONSUMER DECK - Arta-Style Light Mode (12 slides)
import {
  Page1Title as ConsumerPage1Title,
  Page2Problem as ConsumerPage2Problem,
  Page2bWhySolutionsFail as ConsumerPage2bWhySolutionsFail,
  Page2cMeetARIA as ConsumerPage2cMeetARIA,
  Page3Solution as ConsumerPage3Solution,
  Page4Pillars as ConsumerPage4Pillars,
  Page5AlternativesAI as ConsumerPage5AlternativesAI,
  Page5bHowARIAWorks as ConsumerPage5bHowARIAWorks,
  Page6FeaturesPricing as ConsumerPage6FeaturesPricing,
  Page7Trust as ConsumerPage7Trust,
  Page8ProofTeam as ConsumerPage8ProofTeam,
  Page9CommunityCTA as ConsumerPage9CommunityCTA
} from './slides/consumer'

// OLD Act 1 - Replaced with strategic redesign
// import PerfectStormAltSlide from './slides/alt/PerfectStormAltSlide'
// import ThreeLocksAltSlide from './slides/alt/ThreeLocksAltSlide'
// import AdvisorExtinctionV3 from './slides/alt/AdvisorExtinctionV3'
// import EighteenMonthWindowV7 from './slides/alt/EighteenMonthWindowV7'

// NEW Act 1 - Strategic Redesign (ARTA-Competitive)
import Slide1TitleOpportunity from './slides/act1-new/Slide1TitleOpportunity'
import Slide2GeographicBlindspot from './slides/act1-new/Slide2GeographicBlindspot'
import Slide3AlphaAccessGap from './slides/act1-new/Slide3AlphaAccessGap'
import Slide4ConvergenceWindow from './slides/act1-new/Slide4ConvergenceWindow'

// NEW Act 1 - V2 Versions (Refined based on critique)
import Slide1InequalityGapV2 from './slides/act1-new/Slide1InequalityGapV2'
import Slide2GeographicTrapV2 from './slides/act1-new/Slide2GeographicTrapV2'
import Slide3ThreeWallsV2 from './slides/act1-new/Slide3ThreeWallsV2'
import Slide4WindowCPAV2 from './slides/act1-new/Slide4WindowCPAV2'
import Slide5HiddenOpportunityV2 from './slides/act1-new/Slide5HiddenOpportunityV2'

// NEW Act 1 - V0 Versions (Pure Strategic Plan Implementation)
import Slide1HiddenOpportunityV0 from './slides/act1-new/Slide1HiddenOpportunityV0'
import Slide2GeographicBlindspotV0 from './slides/act1-new/Slide2GeographicBlindspotV0'
import Slide3AlphaAccessGapV0 from './slides/act1-new/Slide3AlphaAccessGapV0'
import Slide4ConvergenceWindowV0 from './slides/act1-new/Slide4ConvergenceWindowV0'
import Slide5LockedValueV0 from './slides/act1-new/Slide5LockedValueV0'

// NEW Act 1 - V3 Hybrid (Best of V2 + V0 with Visual Maps)
import Slide1InequalityV3 from './slides/act1-new/Slide1InequalityV3'
import Slide2GeographicTrapV3 from './slides/act1-new/Slide2GeographicTrapV3'
import Slide3ThreeWallsV3 from './slides/act1-new/Slide3ThreeWallsV3'
import Slide4WindowCPAV3 from './slides/act1-new/Slide4WindowCPAV3'
import Slide5LockedValueV3 from './slides/act1-new/Slide5LockedValueV3'

// NEW Act 1 - V4 Professional UI/UX (Based on Best Slides Analysis)
import Slide1InequalityV4 from './slides/act1-new/Slide1InequalityV4'
import Slide2GeographicTrapV4 from './slides/act1-new/Slide2GeographicTrapV4'
import Slide3ThreeWallsV4 from './slides/act1-new/Slide3ThreeWallsV4'
import Slide4WindowCPAV4 from './slides/act1-new/Slide4WindowCPAV4'
import Slide5LockedValueV4 from './slides/act1-new/Slide5LockedValueV4'

// NEW Act 1 - V5 Building Towards ARIA AI Solution
import Slide2GeographicTrapV5 from './slides/act1-new/Slide2GeographicTrapV5'
import Slide3ThreeWallsV5 from './slides/act1-new/Slide3ThreeWallsV5'
import Slide5ScaleForAIV5 from './slides/act1-new/Slide5ScaleForAIV5'

// NEW Act 1 - V6 Access + Intelligence Framework (Dual Solution)
import Slide1DualCrisisV6 from './slides/act1-new/Slide1DualCrisisV6'
import Slide2AccessIntelligenceMatrixV6 from './slides/act1-new/Slide2AccessIntelligenceMatrixV6'
import Slide3TwinFailuresV6 from './slides/act1-new/Slide3TwinFailuresV6'
import Slide4ConvergenceImperativeV6 from './slides/act1-new/Slide4ConvergenceImperativeV6'

// NEW Act 1 - V7 Refined Dual Gap Messaging
import Slide2DualGapV7 from './slides/act1-new/Slide2DualGapV7'
import Slide3WealthParadoxV7 from './slides/act1-new/Slide3WealthParadoxV7'
import Slide4TwoDimensionalProblemV7 from './slides/act1-new/Slide4TwoDimensionalProblemV7'
import Slide5ConvergenceWindowV7 from './slides/act1-new/Slide5ConvergenceWindowV7'

// NEW Act 1 - V8 World-Class Investor Deck (Hidden Opportunity Flow)
import Slide1HiddenOpportunityV8 from './slides/act1-new/Slide1HiddenOpportunityV8'
import Slide2GeographicTrapV8 from './slides/act1-new/Slide2GeographicTrapV8'
import Slide3ThreeWallsV8 from './slides/act1-new/Slide3ThreeWallsV8'
import Slide4ConvergenceWindowV8 from './slides/act1-new/Slide4ConvergenceWindowV8'

// Other Act 1 versions - commented out
// import AdvisorExtinctionAltSlide from './slides/alt/AdvisorExtinctionAltSlide'
// import EighteenMonthWindowAltSlide from './slides/alt/EighteenMonthWindowAltSlide'
// import TestVisualDirectly from './slides/alt/TestVisualDirectly'
// import AdvisorExtinctionV2 from './slides/alt/AdvisorExtinctionV2'
// import EighteenMonthWindowV2 from './slides/alt/EighteenMonthWindowV2'
// import EighteenMonthWindowV3 from './slides/alt/EighteenMonthWindowV3'
// import EighteenMonthWindowV4 from './slides/alt/EighteenMonthWindowV4'
// import EighteenMonthWindowV5 from './slides/alt/EighteenMonthWindowV5'
// import EighteenMonthWindowV6 from './slides/alt/EighteenMonthWindowV6'
// ALT slides - commented out since they don't exist after revert
// import MeetARIAAltSlide from './slides/alt/MeetARIAAltSlide'
// import SpecializedTeamsAltSlide from './slides/alt/SpecializedTeamsAltSlide'
// import TripleLockMoatAltSlide from './slides/alt/TripleLockMoatAltSlide'
// import ARIAExperienceAltSlide from './slides/alt/ARIAExperienceAltSlide'
// import ClientJourneysAltSlide from './slides/alt/ClientJourneysAltSlide'
// import TechVsARIAAltSlide from './slides/alt/TechVsARIAAltSlide'
// import AdvisoryPillarsAltSlide from './slides/alt/AdvisoryPillarsAltSlide'
// import ProofPointsAltSlide from './slides/alt/ProofPointsAltSlide'
// import PartnershipEcosystemAltSlide from './slides/alt/PartnershipEcosystemAltSlide'
// import LiveStatusAltSlide from './slides/alt/LiveStatusAltSlide'
// import BusinessModelAltSlide from './slides/alt/BusinessModelAltSlide'
// import FundingAskAltSlide from './slides/alt/FundingAskAltSlide'
// import TeamGovernanceAltSlide from './slides/alt/TeamGovernanceAltSlide'
// import ClosingCTAAltSlide from './slides/alt/ClosingCTAAltSlide'
// import DebugOverlay from './DebugOverlay'  // Uncomment to debug white lines

// CUSTOM Act 1 - 7 Slides (Final optimized structure)
// Using already imported components from above
import Slide3ThreeWallsTealTheme from './slides/act1-custom/Slide3ThreeWallsTealTheme'
import Slide4ConvergenceWindowTealTheme from './slides/act1-custom/Slide4ConvergenceWindowTealTheme'
import Slide5ScaleForAIV5Fixed from './slides/act1-new/Slide5ScaleForAIV5Fixed'
import Slide2DualGapV7Fixed from './slides/act1-new/Slide2DualGapV7Fixed'
import Slide4TwoDimensionalProblemV7Better from './slides/act1-new/Slide4TwoDimensionalProblemV7Better'

// COMPRESSED DECK - New slides
import SlideGapInTheMiddle from './slides/compressed/SlideGapInTheMiddle'
import SlideWhySolutionsFail from './slides/compressed/SlideWhySolutionsFail'
import SlideGapInTheMiddleV2 from './slides/compressed/SlideGapInTheMiddleV2'
import SlideWhySolutionsFailV2 from './slides/compressed/SlideWhySolutionsFailV2'
import SlideMeetARIAV3 from './slides/compressed/SlideMeetARIAV3'
import SlideAIEngineV2 from './slides/compressed/SlideAIEngineV2'
import SlideAgenticSymphonyV3 from './slides/compressed/SlideAgenticSymphonyV3'
import SlideARIAAIPricing from './slides/compressed/SlideARIAAIPricing'
import SlideCompetitiveDominanceV3 from './slides/compressed/SlideCompetitiveDominanceV3'
import SlideIndiaGatewayV2 from './slides/compressed/SlideIndiaGatewayV2'
import SlideWedgeExpandV2 from './slides/compressed/SlideWedgeExpandV2'
import SlideGoToMarketV3 from './slides/compressed/SlideGoToMarketV3'
import SlideARIAWealthDemo from './slides/compressed/SlideARIAWealthDemo'
import SlideWealthOrchestratorAgent from './slides/compressed/SlideWealthOrchestratorAgent'
import SlideAlternativesShowcase from './slides/compressed/SlideAlternativesShowcase'
import SlideARIATradeDemo from './slides/compressed/SlideARIATradeDemo'
import SlideLockedToLiquidV2 from './slides/compressed/SlideLockedToLiquidV2'
import SlideThreeModules from './slides/compressed/SlideThreeModules'
import SlideMeetARIAV2 from './slides/compressed/SlideMeetARIAV2'
import SlideMeetARIAOrgChart from './slides/compressed/SlideMeetARIAOrgChart'
import SlideMeetARIAOrgChartV2 from './slides/compressed/SlideMeetARIAOrgChartV2'
import SlideAgenticDecisionFlow from './slides/compressed/SlideAgenticDecisionFlow'
import Slide18AIInvestmentCommittee from './slides/compressed/Slide18AIInvestmentCommittee'
import SlideWhoItsFor from './slides/compressed/SlideWhoItsFor'
import SlideEnterARIA from './slides/compressed/SlideEnterARIA'
// Slide1DualCrisisV6 already imported above

console.log('Defining slides arrays...')

// MAIN INVESTOR DECK - 40 SLIDES (Following DECK_AUDIT_AND_STORY_ARC_V2.md)
const mainDeckSlides = [
  // ====== OPENING (3 slides) ======
  { component: TitleSlide, title: 'ARIA - The Virtuoso Intelligence' },                    // Slide 0
  { component: ExecutiveSummarySlide, title: 'Executive Summary' },                         // Slide 1
  { component: AgendaRoadmapSlide, title: 'Agenda: The 5-Act Journey' },                   // Slide 2
  
  // ====== ACT 1 - THE DISRUPTION (V7 Dual Gap Framework - 6 slides) ======
  { component: Act1Slide, title: 'Act 1: The Disruption' },                                // Slide 3
  { component: Slide1DualCrisisV6, title: 'ARIA - Where Access Meets Intelligence' },      // Slide 4 (V7)
  { component: Slide2DualGapV7, title: 'The Dual Gap Creating $124T Opportunity' },        // Slide 5
  { component: Slide3WealthParadoxV7, title: 'The Paradox of Modern Wealth' },             // Slide 6
  { component: Slide4TwoDimensionalProblemV7, title: 'Why Today\'s Solutions Fail' },      // Slide 7
  { component: Slide5ConvergenceWindowV7, title: 'The 18-Month Convergence Window' },
  
  // ====== ACT 2 - THE ARIA STRATEGY (8 slides) ======
  { component: Act2Slide, title: 'Act 2: The ARIA Strategy' },                             // Slide 9
  { component: IntroducingARIASlide, title: 'Introducing ARIA' },                          // Slide 10
  { component: AgentOrchestraSlide, title: 'The ARIA Agent Orchestra' },                   // Slide 11
  { component: WedgeExpandSlide, title: 'The Wedge & Expand Strategy' },                   // Slide 12
  { component: IndiaGatewaySlide, title: 'India: Our Gateway, Not Our Ceiling' },          // Slide 13
  { component: B2B2CDistributionSlide, title: 'Our B2B2C Distribution Moat' },             // Slide 14
  { component: DigitalFamilyOfficeOSSlide, title: 'Digital Family Office OS' },            // Slide 15
  { component: ARIAPlatformExperienceSlide, title: 'The ARIA Experience' },
  
  // ====== ACT 3 - THE PRODUCT SUITE (7 slides) ======
  { component: Act3Slide, title: 'Act 3: The Unfair Advantages' },                         // Slide 17
  { component: ARIAClientJourneySlide, title: 'Real Success Stories' },                    // Slide 18
  { component: ARIATechMFSlide, title: 'ARIA vs Tech-MF Platforms' },                      // Slide 19
  { component: ARIAInvestmentAdvisorySlide, title: 'AI-Powered Advisory' },                // Slide 20
  { component: ARIAGoalBasedInvestingSlide, title: 'Goal-Based Wealth Creation' },         // Slide 21
  { component: ARIAAIFSlide, title: 'Alternative Investment Fund' },                       // Slide 22
  // { component: TripleLockMoatAltSlide, title: 'Our Triple Lock Moat' },
  
  // ====== ACT 4 - VALIDATION (5 slides) ======
  { component: Act4Slide, title: 'Act 4: Validation' },                                    // Slide 24
  { component: LivePlatformSlide, title: 'Prototype Validated' },                          // Slide 25
  { component: TractionDashboardSlide, title: 'Validation Metrics' },                      // Slide 26
  { component: StrategicPartnershipsSlide, title: 'Strategic Partnerships' },              // Slide 27
  // { component: ProofPointsAltSlide, title: 'Proof Points Grid 2.0' },
  
  // ====== ACT 5 - THE BUSINESS (8 slides) ======
  { component: Act5Slide, title: 'Act 5: The Business' },                                  // Slide 29
  { component: OpportunitySlide, title: 'Market Opportunity' },                            // Slide 30
  { component: GoToMarketSlide, title: 'Go-to-Market Strategy' },                         // Slide 31
  { component: WhyWeWinSlide, title: 'Why We Win' },                                      // Slide 32
  { component: FinancialProjections1Slide, title: 'Financial Projections' },               // Slide 33
  { component: TeamSlide, title: 'Team' },                                                // Slide 34
  { component: VoraVenturesSlide, title: 'The Vora Advantage' },                          // Slide 35
  { component: FundingSlide, title: '$5M Seed Round' },
  
  // ====== CLOSING ======
  { component: ClosingCommitmentSlide, title: 'Join Us' }                                 // Slide 37
];

// APPENDIX SLIDES - Supporting slides, alternates, and deep dives
const appendixSlides = [
  
  // ====== ORIGINAL ACT 1 (Alternative to V7) ======
  { component: StanfordSlide, title: 'AI is the New Alpha' },
  { component: MarketSwitchingSlide, title: 'Market Switching Now' },
  { component: AlphaGapSlide, title: 'The Three Failures' },
  
  // ====== STRATEGY SLIDES (Not in main deck) ======
  { component: AgentOrchestraSlide, title: 'The ARIA Agent Orchestra' },
  { component: WedgeExpandSlide, title: 'The Wedge & Expand Strategy' },
  { component: IndiaGatewaySlide, title: 'India: Our Gateway, Not Our Ceiling' },
  { component: AlternativeAIDDSlide, title: 'The ARIA Data Engine' },
  { component: USTechStrategySlide, title: 'US Tech Strategy: Read vs Execute' },
  { component: B2B2CDistributionSlide, title: 'Our B2B2C Distribution Moat' },
  { component: ThreeAlphaAgentsSlide, title: 'Three Core Products' },
  
  // ====== MOAT & ACTION (Not in main deck) ======
  { component: DigitalFamilyOfficeOSSlide, title: 'Digital Family Office OS' },
  { component: ARIAInActionSlide, title: 'ARIA in Action: The Symphony' },
  
  // ====== EXTRA VALIDATION (Not in main deck) ======
  { component: TechValidationSlide, title: 'Proven Technology Architecture' },
  { component: GlassBoxAISlide, title: 'Glass Box AI Transparency' },
  
  // ====== EXTRA BUSINESS (Not in main deck) ======
  { component: CompetitiveMatrixSlide, title: 'Competitive Analysis' },
  { component: FinancialProjections2Slide, title: 'Unit Economics' },
  { component: FinancialProjections3Slide, title: 'Use of Funds' },
  
  // Product Appendix - Chapter 1: Zerodha
  { component: ZerodhaConceptSlide, title: 'Chapter 1: Zerodha Trading Intelligence' },
  { component: ZerodhaFeaturesSlide, title: 'Zerodha Features & Capabilities' },
  { component: ZerodhaLiveSnapshotSlide, title: 'Zerodha Live Platform Snapshot' },
  
  // Product Appendix - Chapter 2: CGMF
  { component: CGMFConceptSlide, title: 'Chapter 2: CGMF Mutual Fund Advisory' },
  { component: CGMFFeaturesSlide, title: 'CGMF Features & Capabilities' },
  { component: CGMFLiveSnapshotSlide, title: 'CGMF Live Platform Snapshot' },
  
  // Product Appendix - Chapter 3: Agentic AI
  { component: AgenticAIConceptSlide, title: 'Chapter 3: Agentic AI System' },
  { component: AgenticAIFeaturesSlide, title: 'Agentic AI Features' },
  { component: AgenticAILiveSnapshotSlide, title: 'Agentic AI Live Snapshot' },
  
  // Product Appendix - Chapter 4: Future Modules
  { component: FutureModulesConceptSlide, title: 'Chapter 4: Future Modules' },
  { component: FutureModulesFeaturesSlide, title: 'Future Modules Features' },
  { component: FutureModulesLiveSnapshotSlide, title: 'Future Modules Development Pipeline' },
  
  // Product Appendix - Chapter 5: Trading Agents
  { component: TradingAgentsConceptSlide, title: 'Chapter 5: Trading Agents + Hedge Fund' },
  { component: TradingAgentsFeaturesSlide, title: 'Trading Agents Features' },
  { component: TradingAgentsLiveSnapshotSlide, title: 'Trading Agents Live Analysis' },
  
  // Product Appendix - Chapter 6: Algo Trading
  { component: AlgoTradingConceptSlide, title: 'Chapter 6: Algo Trading Laboratory' },
  { component: AlgoTradingFeaturesSlide, title: 'Algo Trading Features' },
  { component: AlgoTradingLiveSnapshotSlide, title: 'Algo Trading Live Snapshot' },
  
  // Product Appendix - Chapter 7: Sentiment Module
  { component: SentimentModuleConceptSlide, title: 'Chapter 7: Sentiment Intelligence Module' },
  { component: SentimentModuleFeaturesSlide, title: 'Sentiment Module Features' },
  { component: SentimentModuleLiveSnapshotSlide, title: 'Sentiment Module Live Snapshot' },
  
  // Supporting Enhancement Slides
  { component: LiveMetricsDashboardSlide, title: 'Live Platform Metrics' },
  
  // Additional Appendix Slides - Deep Dive (First Batch)
  { component: TechStackAPISlide, title: 'Tech Stack & API Design' },
  { component: AgenticMoatSlide, title: 'Why We Win: Agentic Moat' },
  { component: AIEquityAgentSlide, title: 'AI Equity Agent Roadmap' },
  { component: MarketSizingSlide, title: 'Market Sizing Deep Dive' },
  { component: AgenticWorkflowSlide, title: 'Agentic Workflow Example' },
  
  // Additional Appendix Slides - Market Analysis (Second Batch)
  { component: LargestMarketSlide, title: 'The Largest Market on Earth' },
  { component: MarketInMotionSlide, title: 'A Market in Motion' },
  { component: ThreeCoreFailuresSlide, title: 'The Three Core Failures' },
  { component: AdvisorShortageSlide, title: 'The Advisor Shortage Crisis' },
  { component: TraditionalAdviceFailsSlide, title: 'Traditional Advice Fails HNWIs' },
  
  // Additional Appendix Slides - Deep Analysis (Third Batch)
  { component: ThreeFailuresComparisonSlide, title: 'Why They\'re Switching' },
  { component: AlternativeAssetAgentSlide, title: 'Alternative Asset AI Agent' },
  { component: AIInvestmentCommitteeSlide, title: 'AI Investment Committee' },
  { component: ThreeAlphaAgentsMoatSlide, title: 'Three Alpha Agents Moat' },
  
  // Technical Deep Dive (Moved from main deck)
  { component: ProductOverviewSlide, title: 'ARIA Orchestration Platform' },
  { component: IndiaProblemSlide, title: 'India: $5T Market Locked' },
  { component: GIFTSolutionSlide, title: 'The India Gateway Fund' },
  { component: ARIAFundManagerSlide, title: 'ARIA as AI Fund Manager' },
  { component: EvolutionOfWealthTechSlide, title: 'Evolution: Robo to Agentic' },
  { component: ARIASwarmSlide, title: 'Meet ARIA\'s 68+ Agent Swarm' },
  { component: HybridTrustModelSlide, title: 'The AI + Human Hybrid Model' },
  { component: AgenticValuePropSlide, title: 'The Agentic Value Proposition' },
  { component: AgentArchitectureSlideNew, title: 'Multi-Agent Architecture' },
  { component: AgentAutonomySlide, title: 'Agent Autonomy Roadmap' },
  { component: IntelligenceMultiplierSlide, title: '10,000x Speed Advantage' },
  { component: TechArchitecture1Slide, title: 'Tech Architecture: System' },
  { component: TechArchitecture2Slide, title: 'Tech Architecture: Agents' },
  { component: TechArchitecture3Slide, title: 'Tech Architecture: Security' },
  { component: AgentROICalculatorSlide, title: 'Agent ROI: 473x Return' },
  { component: GrowthPathSlide, title: 'Path to $1B AUM' },
  { component: PartnershipStrategy1Slide, title: 'Partnership Ecosystem' },
  { component: PartnershipStrategy2Slide, title: 'Vora Partnership Details' },
  
  // Redesigned World-Class Slides
  { component: ExecutiveHookSlide, title: 'The AI Revolution is Here' },
  { component: PerfectStormSlide, title: 'The Perfect Storm' },
  { component: AdvisorCrisisSlide, title: 'The Advisor Extinction Event' },
  { component: ARIAatWorkSlide, title: 'ARIA at Work: $25M Example' },
  { component: ZerodhaIntelligence, title: 'Zerodha Intelligence Module' },
  { component: CGMFAdvisory, title: 'CGMF Advisory Module' },
  { component: AgenticAICore, title: 'Agentic AI Core System' },
  { component: AlgoTradingLab, title: 'Algorithmic Trading Laboratory' },
  { component: TradingExecution, title: 'Trading Execution Engine' },
  { component: SentimentAnalysis, title: 'Sentiment Analysis Engine' },
  { component: FutureVision, title: 'Future Vision & Roadmap' },
  { component: ProofPointsGrid, title: 'Proof Points' },
  { component: CompetitiveMoats, title: 'Our Defensive Moats' },
  { component: BusinessModelComplete, title: 'Path to $100M ARR' },
  { component: PartnershipEcosystem, title: 'Partnership Ecosystem' },
  { component: FundingAsk, title: '$5M Seed Round' },
  
  // Act Markers (Moved to Appendix for cleaner flow)
  { component: Act1Slide, title: 'Act 1: The Disruption' },
  { component: Act2Slide, title: 'Act 2: The ARIA Strategy' },
  { component: Act3Slide, title: 'Act 3: The Unfair Advantages' },
  { component: Act4Slide, title: 'Act 4: Validation' },
  { component: Act5Slide, title: 'Act 5: The Business' },
  
  { component: AppendixSlide, title: 'Appendix' },
  
  // NEW Act 1 - Strategic Redesign (Nov 17, 2025) - V1
  { component: Slide1TitleOpportunity, title: 'Act 1.1 V1: ARIA - Your Institutional Edge' },
  { component: Slide2GeographicBlindspot, title: 'Act 1.2 V1: Portfolio Trapped in Yesterday\'s Geography' },
  { component: Slide3AlphaAccessGap, title: 'Act 1.3 V1: The Alpha & Access Gap' },
  { component: Slide4ConvergenceWindow, title: 'Act 1.4 V1: The 18-Month Convergence Window' },
  
  // NEW Act 1 - V2 (Refined based on critique)
  { component: Slide1InequalityGapV2, title: 'Act 1.1 V2: The Wealth Inequality' },
  { component: Slide2GeographicTrapV2, title: 'Act 1.2 V2: The Geographic Trap' },
  { component: Slide3ThreeWallsV2, title: 'Act 1.3 V2: Three Walls Between You and Alpha' },
  { component: Slide4WindowCPAV2, title: 'Act 1.4 V2: The 18-Month Window + CPA Advantage' },
  { component: Slide5HiddenOpportunityV2, title: 'Act 1.5 V2: The $124T Hidden Opportunity' },
  
  // NEW Act 1 - V0 (Pure Strategic Plan - Most Minimal)
  { component: Slide1HiddenOpportunityV0, title: 'Act 1.1 V0: The $124T Hidden Opportunity (Strategic Plan)' },
  { component: Slide2GeographicBlindspotV0, title: 'Act 1.2 V0: Geographic Blindspot (Strategic Plan)' },
  { component: Slide3AlphaAccessGapV0, title: 'Act 1.3 V0: Alpha & Access Gap (Strategic Plan)' },
  { component: Slide4ConvergenceWindowV0, title: 'Act 1.4 V0: 18-Month Convergence (Strategic Plan)' },
  { component: Slide5LockedValueV0, title: 'Act 1.5 V0: The $45T Locked Value' },
  
  // NEW Act 1 - V3 Hybrid (Best of All - WITH VISUAL MAPS) 🎯
  { component: Slide1InequalityV3, title: 'Act 1.1 V3: The Wealth Inequality Gap' },
  { component: Slide2GeographicTrapV3, title: 'Act 1.2 V3: The Geographic Trap (with Visual Maps)' },
  { component: Slide3ThreeWallsV3, title: 'Act 1.3 V3: Three Walls Between You and Alpha' },
  { component: Slide4WindowCPAV3, title: 'Act 1.4 V3: The 18-Month Window + CPA Advantage' },
  { component: Slide5LockedValueV3, title: 'Act 1.5 V3: The $45T Opportunity Scale' },
  
  // NEW Act 1 - V4 Professional UI/UX (PRODUCTION READY) ⭐
  { component: Slide1InequalityV4, title: 'Act 1.1 V4: The Wealth Inequality Gap (Professional)' },
  { component: Slide2GeographicTrapV4, title: 'Act 1.2 V4: The Geographic Trap (Enhanced UI)' },
  { component: Slide3ThreeWallsV4, title: 'Act 1.3 V4: Three Walls (Professional Design)' },
  { component: Slide4WindowCPAV4, title: 'Act 1.4 V4: 18-Month Window (Premium UI)' },
  { component: Slide5LockedValueV4, title: 'Act 1.5 V4: $45T Scale (Professional)' },
  
  // NEW Act 1 - V5 Building Towards ARIA AI (RECOMMENDED) 🧠
  { component: Slide1InequalityV4, title: 'Act 1.1 V5: The Wealth Inequality Gap' },
  { component: Slide2GeographicTrapV5, title: 'Act 1.2 V5: Geographic Trap (Better Visual + AI Setup)' },
  { component: Slide3ThreeWallsV5, title: 'Act 1.3 V5: Three Walls Humans Can\'t Climb' },
  { component: Slide4WindowCPAV4, title: 'Act 1.4 V5: 18-Month Window + CPA' },
  { component: Slide5ScaleForAIV5, title: 'Act 1.5 V5: The Scale Only AI Can Handle' },
  
  // NEW Act 1 - V6 Access + Intelligence Framework (DUAL SOLUTION) 🔑
  { component: Slide1DualCrisisV6, title: 'Act 1.1 V6: The Dual Crisis - Access + Intelligence' },
  { component: Slide2AccessIntelligenceMatrixV6, title: 'Act 1.2 V6: The Wealth Management Matrix' },
  { component: Slide3TwinFailuresV6, title: 'Act 1.3 V6: The Twin Failures' },
  { component: Slide4ConvergenceImperativeV6, title: 'Act 1.4 V6: Why Access + Intelligence Matter NOW' },
  
  // NEW Act 1 - V7 Refined Dual Gap (FINAL PRODUCTION) 🎯
  { component: Slide1DualCrisisV6, title: 'Act 1.1 V7: ARIA - Where Access Meets Intelligence' },
  { component: Slide2DualGapV7, title: 'Act 1.2 V7: The Dual Gap Creating $124T Opportunity' },
  { component: Slide3WealthParadoxV7, title: 'Act 1.3 V7: The Paradox of Modern Wealth' },
  { component: Slide4TwoDimensionalProblemV7, title: 'Act 1.4 V7: Why Today\'s Solutions Fail' },
  { component: Slide5ConvergenceWindowV7, title: 'Act 1.5 V7: The 18-Month Convergence Window' },

  // NEW Act 1 - V8 World-Class Investor Deck (Hidden Opportunity + Geographic Trap + Three Walls + Window) 🚀
  { component: Slide1HiddenOpportunityV8, title: 'Act 1.1 V8: The $124T Hidden Opportunity' },
  { component: Slide2GeographicTrapV8, title: 'Act 1.2 V8: Your Portfolio vs Global Reality' },
  { component: Slide3ThreeWallsV8, title: 'Act 1.3 V8: Three Walls Between You and Institutional Returns' },
  { component: Slide4ConvergenceWindowV8, title: 'Act 1.4 V8: The 18-Month Convergence Window' },
  
  // OLD Act 1 - Replaced with strategic redesign
  // { component: PerfectStormAltSlide, title: 'ALT 108: The AI Disruption Is Here' },
  // { component: ThreeLocksAltSlide, title: 'ALT 109: The $45T Locked Value Crisis' },
  // { component: AdvisorExtinctionV3, title: 'V3: The Advisor Extinction Event (4-Section Alpha Gap)' },
  // { component: EighteenMonthWindowV7, title: 'V7: The 18-Month Window (Key Data Points)' },
  
  // Other versions commented out
  // { component: TestVisualDirectly, title: 'TEST: Visual Component Test' },
  // { component: AdvisorExtinctionAltSlide, title: 'ALT 110: The Advisor Extinction Event (Original)' },
  // { component: EighteenMonthWindowAltSlide, title: 'ALT 111: The 18-Month Window (Original)' },
  // { component: AdvisorExtinctionV2, title: 'V2: The Advisor Extinction Event (Redesigned)' },
  // { component: EighteenMonthWindowV2, title: 'V2: The 18-Month Window (Redesigned)' },
  // { component: EighteenMonthWindowV3, title: 'V3: The 18-Month Window (Enhanced Content)' },
  // { component: EighteenMonthWindowV4, title: 'V4: The 18-Month Window (Professional)' },
  // { component: EighteenMonthWindowV5, title: 'V5: The 18-Month Window (Balanced)' },
  // { component: EighteenMonthWindowV6, title: 'V6: The 18-Month Window (Problem-Focused)' },
  // Commented out - components not imported
  // { component: MeetARIA, title: 'Meet ARIA – Your AI Family Office CEO' },
  // { component: SpecializedTeams, title: "ARIA's 5 Specialized Teams" },
  // { component: TripleLockMoat, title: 'Our Triple Lock Moat' },
  // { component: ARIAExperience, title: 'The ARIA CEO Experience' },
  // { component: ClientJourneys, title: 'The 46% Who Switched – Client Journeys' },
  // { component: TechVsARIA, title: "Tech vs ARIA – Why Tech Alone Isn't Enough" },
  // { component: AdvisoryPillars, title: 'Your AI CEO at Work – Advisory Pillars' },
  // { component: ProofPoints, title: 'Proof Points Grid 2.0' },
  // { component: LiveStatus, title: 'Live Status & Prototype Readiness' },
  // { component: BusinessModel, title: 'Business Model & Unit Economics 2.0' },
  // { component: FundingAsk, title: '$5M Seed Round' },
  // { component: TeamGovernance, title: 'Team & Governance 2.0' },
  // { component: ClosingCTA, title: 'Closing CTA 2.0' }
];

// PREMIUM ALTERNATIVE SLIDES - commented out (components not imported)
const premiumAltSlides = [
  // { component: MeetARIA, title: 'Meet ARIA – Your AI Family Office CEO' },
  // { component: SpecializedTeams, title: "ARIA's 5 Specialized Teams" },
  // { component: ARIAExperience, title: 'The ARIA CEO Experience' },
  // { component: ClientJourneys, title: 'The 46% Who Switched' },
  // { component: BusinessModel, title: 'Business Model & Economics 2.0' }
];

// CUSTOM ACT 1 - 7 SLIDES (Optimal story arc sequence with compact versions)
const customAct1Slides = [
  // Slide 1: The Wealth Inequality Gap - Start with personal injustice
  { component: Slide1InequalityV4, title: 'The Wealth Inequality Gap' },
  
  // Slide 2: The 18-Month Window - Create urgency early
  { component: Slide4ConvergenceWindowTealTheme, title: 'The 18-Month Convergence Window' },
  
  // Slide 3: The Geographic Trap - Show portfolio problem
  { component: Slide2GeographicTrapV5, title: 'The Geographic Trap' },
  
  // Slide 4: Three Walls - Show ACCESS barriers
  { component: Slide3ThreeWallsTealTheme, title: 'Three Walls Between You and Alpha' },
  
  // Slide 5: Scale Only AI Can Handle - Show INTELLIGENCE barriers (no ARIA mention)
  { component: Slide5ScaleForAIV5Fixed, title: 'The Scale Only AI Can Handle' },
  
  // Slide 6: The Dual Gap - Combine both gaps into $124T opportunity (fixed text sizes)
  { component: Slide2DualGapV7Fixed, title: 'The Dual Gap Creating $124T Opportunity' },
  
  // Slide 7: Why Solutions Fail - End with why you need a NEW solution (better design)
  { component: Slide4TwoDimensionalProblemV7Better, title: 'Why Today\'s Solutions Fail' }
];

// ALTERNATE: 6-SLIDE VERSION (Remove "Why Solutions Fail" to avoid redundancy)
// const customAct1Slides = [
//   { component: Slide1InequalityV4, title: 'The Wealth Inequality Gap' },
//   { component: Slide4ConvergenceWindowTealTheme, title: 'The 18-Month Convergence Window' },
//   { component: Slide2GeographicTrapV5, title: 'The Geographic Trap' },
//   { component: Slide3ThreeWallsTealTheme, title: 'Three Walls Between You and Alpha' },
//   { component: Slide5ScaleForAIV5Fixed, title: 'The Scale Only AI Can Handle' },
//   { component: Slide2DualGapV7Fixed, title: 'The Dual Gap Creating $124T Opportunity' }
// ];

// EXPANDED DECK SLIDES - 60 high-quality slides based on our past 2-3 days of work
const expandedDeckSlides = [
  // ====== OPENING (3 slides) ======
  { component: TitleSlide, title: 'ARIA - The Virtuoso Intelligence' },
  { component: ExecutiveSummarySlide, title: 'Executive Summary' },
  { component: AgendaRoadmapSlide, title: 'Agenda: The 5-Act Journey' },
  
  // ====== ACT 1 - THE DISRUPTION (10 slides) ======
  // Using V7 Dual Gap Framework + our finalized coherent structure
  { component: Act1Slide, title: 'Act 1: The Disruption' },
  { component: Slide1DualCrisisV6, title: 'ARIA - Where Access Meets Intelligence' },
  { component: Slide2DualGapV7, title: 'The Dual Gap Creating $124T Opportunity' },
  { component: Slide3WealthParadoxV7, title: 'The Paradox of Modern Wealth' },
  { component: Slide4TwoDimensionalProblemV7, title: 'Why Today\'s Solutions Fail' },
  { component: Slide5ConvergenceWindowV7, title: 'The 18-Month Convergence Window' },
  // Adding world-class problem validation slides we created
  { component: ExecutiveHookSlide, title: 'The AI Revolution is Here' },
  { component: PerfectStormSlide, title: 'The Perfect Storm' },
  { component: AdvisorCrisisSlide, title: 'The Advisor Extinction Event' },
  { component: LargestMarketSlide, title: 'The Largest Market on Earth' },
  
  // ====== ACT 2 - THE ARIA STRATEGY (11 slides) ======
  { component: Act2Slide, title: 'Act 2: The ARIA Strategy' },
  // Using IntroducingARIASlide instead of ALT slides that don't exist
  { component: IntroducingARIASlide, title: 'Meet ARIA – Your AI Family Office CEO' },
  { component: ARIASwarmSlide, title: 'Meet ARIA\'s 68+ Agent Swarm' },
  { component: EvolutionOfWealthTechSlide, title: 'Evolution: Robo to Agentic' },
  { component: WedgeExpandSlide, title: 'The Wedge & Expand Strategy' },
  { component: IndiaGatewaySlide, title: 'India: Our Gateway, Not Our Ceiling' },
  { component: GIFTSolutionSlide, title: 'The India Gateway Fund' },
  { component: B2B2CDistributionSlide, title: 'Our B2B2C Distribution Moat' },
  { component: DigitalFamilyOfficeOSSlide, title: 'Digital Family Office OS' },
  { component: ARIAPlatformExperienceSlide, title: 'The ARIA Experience' },
  
  // ====== ACT 3 - THE PRODUCT SUITE (13 slides) ======
  { component: Act3Slide, title: 'Act 3: The Unfair Advantages' },
  // Core ARIA product slides (world-class design)
  { component: ARIAClientJourneySlide, title: 'Real Success Stories' },
  { component: ARIATechMFSlide, title: 'ARIA vs Tech-MF Platforms' },
  { component: ARIAInvestmentAdvisorySlide, title: 'AI-Powered Advisory' },
  { component: ARIAGoalBasedInvestingSlide, title: 'Goal-Based Wealth Creation' },
  { component: ARIAAIFSlide, title: 'Alternative Investment Fund' },
  // World-class product demonstrations we built
  { component: ARIAatWorkSlide, title: 'ARIA at Work: $25M Example' },
  { component: ZerodhaIntelligence, title: 'Zerodha Intelligence Module' },
  { component: CGMFAdvisory, title: 'CGMF Advisory Module' },
  { component: AgenticAICore, title: 'Agentic AI Core System' },
  { component: AlgoTradingLab, title: 'Algorithmic Trading Laboratory' },
  // { component: TripleLockMoatAltSlide, title: 'Our Triple Lock Moat' },
  { component: FutureVision, title: 'Future Vision & Roadmap' },
  
  // ====== ACT 4 - VALIDATION (7 slides) ======
  { component: Act4Slide, title: 'Act 4: Validation' },
  { component: LivePlatformSlide, title: 'Prototype Validated' },
  { component: TractionDashboardSlide, title: 'Validation Metrics' },
  { component: StrategicPartnershipsSlide, title: 'Strategic Partnerships' },
  // Using world-class proof points we designed
  { component: ProofPointsGrid, title: 'Proof Points' },
  { component: CompetitiveMoats, title: 'Our Defensive Moats' },
  { component: HybridTrustModelSlide, title: 'The AI + Human Hybrid Model' },
  
  // ====== ACT 5 - THE BUSINESS (10 slides) ======
  { component: Act5Slide, title: 'Act 5: The Business' },
  { component: OpportunitySlide, title: 'Market Opportunity' },
  { component: MarketSizingSlide, title: 'Market Sizing Deep Dive' },
  { component: GoToMarketSlide, title: 'Go-to-Market Strategy' },
  { component: WhyWeWinSlide, title: 'Why We Win' },
  // Using world-class business model slides we created
  { component: BusinessModelComplete, title: 'Path to $100M ARR' },
  { component: PartnershipEcosystem, title: 'Partnership Ecosystem' },
  { component: TeamSlide, title: 'Team' },
  { component: VoraVenturesSlide, title: 'The Vora Advantage' },
  { component: FundingAsk, title: '$5M Seed Round' },
  
  // ====== CLOSING (2 slides) ======
  { component: ClosingCommitmentSlide, title: 'Join Us' }
  // { component: ClosingCTAAltSlide, title: 'The Next Step' }
];

// TUESDAY NIGHT FINAL DECK - 55 slides (Updated Nov 26)
// Based on SPEAKER_NOTES_STRATEGY_DECK.md - the exact structure + HybridTrustModelSlide
const tuesdayStrategyDeck = [
  // OPENING (3 slides)
  { component: TitleSlide, title: 'ARIA - The Virtuoso Intelligence' },
  { component: ExecutiveSummarySlide, title: 'Executive Summary' },
  { component: AgendaRoadmapSlide, title: 'Agenda' },
  
  // ACT 1: THE DISRUPTION (7 slides, 4-10)
  { component: Slide1InequalityV4, title: 'Wealth Inequality Gap' },
  { component: Slide4ConvergenceWindowTealTheme, title: '18-Month Window' },
  { component: Slide2GeographicTrapV5, title: 'Geographic Trap' },
  { component: Slide3ThreeWallsTealTheme, title: 'Three Walls' },
  { component: Slide5ScaleForAIV5Fixed, title: 'Scale Only AI Can Handle' },
  { component: Slide2DualGapV7Fixed, title: 'Dual Gap' },
  { component: Slide4TwoDimensionalProblemV7Better, title: 'Why Solutions Fail' },
  
  // ACT 2: THE ARIA STRATEGY (13 slides, 11-23)
  { component: Act2Slide, title: 'Act 2 Introduction' },
  { component: AlphaGapSlide, title: 'Alpha & Access Gap' },
  { component: IntroducingARIASlide, title: 'Meet ARIA' },
  { component: DigitalFamilyOfficeOSSlide, title: 'Digital Family Office OS' },
  { component: WedgeExpandSlide, title: 'Wedge & Expand' },
  { component: IndiaGatewaySlide, title: 'India Gateway' },
  { component: GIFTExecutionSlide, title: 'From Locked to Liquid' },
  { component: AlternativeAIDDSlide, title: 'ARIA Data Engine' },
  { component: ThreeAlphaAgentsSlide, title: 'Three Core Products' },
  { component: AgenticSymphonyFixed, title: 'Agentic Symphony' },
  { component: B2B2CDistributionSlide, title: 'B2B2C Distribution' },
  { component: WhyARIAWinsSlide, title: 'Why ARIA Wins' },
  { component: CompetitiveMatrixSlide, title: 'Competitive Matrix' },
  
  // ACT 3: THE UNFAIR ADVANTAGES (13 slides, 24-36)
  { component: Act3Slide, title: 'Act 3 Introduction' },
  { component: ProductOverviewSlide, title: 'AI Family Office Suite' },
  { component: ARIALiveDemoSlide, title: 'ARIA in Action' },
  { component: ARIALiquidityEventSlide, title: '$25M Liquidity Event' },
  { component: ZerodhaIntelligenceFixed, title: 'Zerodha Module' },
  { component: ARIAPlatformExperienceSlide, title: 'ARIA CEO Experience' },
  { component: AgentArchitectureSlideNew, title: 'Multi-Agent Architecture' },
  { component: AgenticAICoreFixed, title: 'Agentic AI Core' },
  { component: ARIATechMFSlide, title: 'Why Tech Alone Fails' },
  { component: YourAICEOatWorkFixed, title: 'Your AI CEO at Work' },
  { component: PersonalizationAtScaleFixed, title: 'Personalization at Scale' },
  { component: LivePlatformSlide, title: 'Platform is Live' },
  { component: MarketSwitchingSlide, title: '46% Who Switched' },
  
  // ACT 4: VALIDATION (6 slides)  
  { component: PrototypeValidatedSlide, title: 'Platform Live' },
  { component: ARIAClientJourneySlideNew, title: 'Client Journey: Before/After' },
  { component: TractionDashboardSlide, title: 'Validation Metrics' },
  { component: StrategicPartnershipsSlide, title: 'Strategic Partnerships' },
  { component: HybridTrustModelSlide, title: 'AI + Human Trust Model' },
  { component: TechArchitecture1Slide, title: 'Technology Validated' },
  
  // ACT 5: THE BUSINESS (10 slides)
  { component: Act5Slide, title: 'Act 5 Introduction' },
  { component: MarketSizingSlide, title: 'Market Opportunity' },
  { component: GoToMarketSlide, title: 'Go-to-Market' },
  { component: CompetitiveMoatsFixed, title: 'Our Defensive Moats' },
  { component: FinancialProjections1Slide, title: 'Financial Projections' },
  { component: BusinessModelCompleteFixed, title: 'Path to $100M ARR' },
  { component: RoadmapSlide, title: 'Roadmap: Path to $1B' },
  { component: TeamSlide, title: 'Team' },
  { component: VoraVenturesFixed, title: 'Vora Advantage' },
  { component: FundingAskFixed, title: '$5M Seed' },
  
  // CLOSING (1 slide, 54)
  { component: ClosingCommitmentSlide, title: 'Join Us' }
];

// Keep the filtered version for fallback
const strategyDeckSlides = expandedDeckSlides.filter(slide => 
  slide && slide.component // Filter out any undefined components
);

// COMPRESSED DECK - 23 slides (World-class investor pitch with 3-Module Structure)
const compressedDeck = [
  // ====== OPENING (3 slides) ======
  { component: TitleSlide, title: 'ARIA - The Virtuoso Intelligence' },           // 0
  { component: ExecutiveSummarySlide, title: 'The Opportunity' },                  // 1
  { component: SlideWhoItsFor, title: 'The EMILLI Opportunity' },                   // 2 - Target Personas
  
  // ====== PROBLEM (2 slides) ======
  { component: SlideGapInTheMiddleV2, title: 'The Gap in the Middle' },            // 3
  { component: SlideWhySolutionsFailV2, title: 'Why Solutions Fail' },             // 4
  
  // ====== BRIDGE (1 slide) ======
  { component: SlideEnterARIA, title: 'Enter ARIA' },                              // 5 - Problem→Solution Bridge
  
  // ====== PLATFORM INTRO (1 slide) ======
  { component: SlideMeetARIAOrgChartV2, title: 'Your AI Family Office CEO' },      // 6 - Org Chart
  
  // ====== 🧠 ARIA AI (4 slides) - Intelligence & Experience ======
  { component: Slide18AIInvestmentCommittee, title: '18 AI Investment Committee' }, // 7 - Investment Committee
  { component: SlideAgenticDecisionFlow, title: 'How ARIA Makes Decisions' },      // 8 - Decision Flow
  { component: ARIAPlatformExperienceSlide, title: 'The ARIA Experience' },        // 8 - AI-powered UX
  { component: SlideARIAAIPricing, title: 'ARIA AI Pricing' },                     // 9 - Pricing tiers
  
  // ====== 🌏 ARIA WEALTH (2 slides) - GIFT City, Alternatives ======
  { component: SlideWealthOrchestratorAgent, title: 'The Wealth Orchestrator' },   // 10 - How agent works + live demo
  { component: SlideAlternativesShowcase, title: 'Curated Alternatives' },         // 11 - 15-40% IRR opportunities
  
  // ====== ⚡ ARIA TRADE (2 slides) - Broker Integration & Execution ======
  { component: SlideARIATradeDemo, title: 'ARIA Trade Live' },                     // 12 - Integration + Demo
  { component: LivePlatformSlide, title: 'Platform is Live' },                     // 13 - Production ready
  
  // ====== PROOF (2 slides) ======
  { component: ARIALiquidityEventSlide, title: '$25M Liquidity Event' },           // 16 - Case study
  { component: StrategicPartnershipsSlideV2, title: 'Strategic Partners' },        // 17
  
  // ====== TRUST (1 slide) ======
  { component: HybridTrustModelSlide, title: 'AI + Human Trust Model' },           // 18
  
  // ====== COMPETITIVE (1 slide) ======
  { component: SlideCompetitiveDominanceV3, title: 'Why ARIA Wins' },              // 19
  
  // ====== BUSINESS (4 slides) ======
  { component: OpportunitySlide, title: 'The Market' },                            // 20
  { component: SlideGoToMarketV3, title: 'Go-to-Market Strategy' },                // 21
  { component: TeamSlide, title: 'Team + Vora' },                                  // 22
  { component: FundingSlide, title: '$5M Seed Round' },                            // 23
  
  // ====== CLOSING (1 slide) ======
  { component: ClosingCommitmentSlide, title: 'Join Us' }                          // 24
];

// CONSUMER DECK - Arta-Style Light Mode (11 slides)
const consumerDeck = [
  { component: ConsumerPage1Title, title: 'Your AI Family Office' },
  { component: ConsumerPage2Problem, title: 'The Ultra-Rich Play Differently' },
  { component: ConsumerPage2bWhySolutionsFail, title: 'Why Solutions Fail' },
  { component: ConsumerPage2cMeetARIA, title: 'Meet ARIA - Your AI CEO' },
  { component: ConsumerPage4Pillars, title: 'Your AI Family Office CEO' },  // Merged with Solution text
  { component: ConsumerPage5bHowARIAWorks, title: 'How ARIA Works' },
  { component: ConsumerPage5AlternativesAI, title: 'Alternatives & AI' },
  { component: ConsumerPage6FeaturesPricing, title: 'Features & Pricing' },
  { component: ConsumerPage7Trust, title: 'Trust & Security' },
  { component: ConsumerPage8ProofTeam, title: 'Proof & Team' },
  { component: ConsumerPage9CommunityCTA, title: 'Get Started' }
];

// DECK CONFIGURATION OPTIONS
const DECK_CONFIGS = {
  'main': mainDeckSlides,                                   // 40-slide investor deck
  'expanded': expandedDeckSlides,                          // 60-slide comprehensive deck
  'strategy-deck': strategyDeckSlides,                     // Strategy deck (filtered)
  'tuesday-deck': tuesdayStrategyDeck,                     // Tuesday 9 PM exact 54-slide deck
  'compressed': compressedDeck,                            // 23-slide world-class pitch
  'consumer': consumerDeck,                                // 11-slide Arta-style consumer deck
  'liquidity-demo': [{ component: ARIALiquidityEventSlide, title: '$25M Liquidity Event Demo' }], // Standalone demo
  'strategy-compact': mainDeckSlides,                      // Compact strategy
  'elevator': mainDeckSlides.slice(0, 24),                 // 24-slide quick pitch
  'full': [...mainDeckSlides, ...appendixSlides],          // Everything (256)
  'premium': [...mainDeckSlides, ...premiumAltSlides],     // Main + premium alts
  'act1-custom': customAct1Slides,                         // Custom 9-slide Act 1
  'act2-custom': [],                                       // Placeholder
  'act3-custom': [],                                       // Placeholder
  'act4-custom': [],                                       // Placeholder
  'act5-custom': []                                        // Placeholder
};

// COMBINED SLIDES ARRAY - Multiple deck configurations available
const urlParams = new URLSearchParams(window.location.search);
const DECK_MODE = urlParams.get('deck') || 'consumer';
const slides = DECK_CONFIGS[DECK_MODE] || customAct1Slides;

console.log('==========================================')
console.log('DECK V2 CONFIGURATION LOADED!')
console.log(`Mode: ${DECK_MODE}`)
console.log(`Main Deck: ${mainDeckSlides.length} slides`)
console.log(`Expanded Deck: ${expandedDeckSlides.length} slides`)
console.log(`Strategy Deck: ${strategyDeckSlides.length} slides (filtered)`)
console.log(`Tuesday Deck: ${tuesdayStrategyDeck.length} slides (exact Tuesday 9PM config)`)
console.log(`Currently Loaded: ${slides.length} slides`)
if (slides.length < 10) {
  console.log('⚠️ Warning: Only', slides.length, 'slides loaded. Check for undefined components.')
  console.log('Slides array:', slides)
}
console.log('------------------------------------------')
if (DECK_MODE === 'tuesday-deck') {
  console.log('🎯 TUESDAY EVENING DECK (Nov 19, 9 PM) - 54 SLIDES')
  console.log('  Opening: Slides 1-3')
  console.log('  Act 1: Slides 4-10 (The Disruption - 7 slides)')
  console.log('  Act 2: Slides 11-23 (The ARIA Strategy - 13 slides)')
  console.log('  Act 3: Slides 24-35 (The Unfair Advantages - 12 slides)')
  console.log('  Act 4: Slides 36-41 (Validation - 6 slides)')
  console.log('  Act 5: Slides 42-53 (The Business - 12 slides)')
  console.log('  Closing: Slide 54')
  console.log('  ✅ Exact structure from SPEAKER_NOTES_STRATEGY_DECK.md!')
  console.log('------------------------------------------')
}
if (DECK_MODE === 'expanded') {
  console.log('🏆 EXPANDED DECK LOADED - World-Class Configuration')
  console.log('  Act 1: V7 Dual Gap Framework (10 slides)')
  console.log('  Act 2: Premium ALT versions + Strategy (11 slides)')
  console.log('  Act 3: Core Products + World-Class Demos (13 slides)')
  console.log('  Act 4: Validation + Proof Points (7 slides)')
  console.log('  Act 5: Complete Business Model (10 slides)')
  console.log('  Includes: 28 world-class slides, 6 premium ALTs')
  console.log('------------------------------------------')
} else if (DECK_MODE === 'act1-custom') {
  console.log('🎯 CUSTOM ACT 1 LOADED - 9 Slides')
  console.log('  1. Wealth Inequality Gap')
  console.log('  2. Geographic Trap')
  console.log('  3. Three Walls (Enhanced with India barriers)')
  console.log('  4. 18-Month Window (Merged)')
  console.log('  5. Scale Only AI Can Handle')
  console.log('  6. $124T Hidden Opportunity')
  console.log('  7. Wealth Matrix (Merged)')
  console.log('  8. Dual Gap Paradox (Merged)')
  console.log('  9. Why Solutions Fail')
  console.log('------------------------------------------')
}
console.log('Available Configurations:')
console.log('  → http://localhost:5173/?deck=tuesday-deck (54-slide Tuesday 9PM FINAL) ⭐⭐⭐')
console.log('  → http://localhost:5173/?deck=strategy-deck (53-slide strategy deck)')
console.log('  → http://localhost:5173/?deck=act1-custom (9-slide custom Act 1)')
console.log('  → http://localhost:5173/?deck=expanded    (60-slide world-class deck)')
console.log('  → http://localhost:5173/?deck=main        (40-slide investor deck)')
console.log('  → http://localhost:5173/?deck=elevator    (24-slide quick pitch)')
console.log('  → http://localhost:5173/?deck=premium     (Main + premium alternatives)')
console.log(`Current URL: ${window.location.href}`)
console.log('===========================================');

function AppContent() {
  console.log('AppContent is rendering...')
  console.log('Number of slides:', slides.length)
  
  // Helper function to get current slide from hash (moved up to use in initial state)
  const getCurrentSlideFromHash = () => {
    const hash = window.location.hash
    const match = hash.match(/^#\/slide\/(\d+)$/)
    const slideIndex = match ? parseInt(match[1], 10) : 0
    // Validate slide index is within range
    return slideIndex >= 0 && slideIndex < slides.length ? slideIndex : 0
  }
  
  // Initialize currentSlide from hash to respect direct navigation
  const [currentSlide, setCurrentSlide] = useState(getCurrentSlideFromHash())
  const [isMobile, setIsMobile] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [preloadedSlides, setPreloadedSlides] = useState(new Set([getCurrentSlideFromHash()]))
  const [showExportDashboard, setShowExportDashboard] = useState(false)
  
  // Use EditModeContext
  const { isEditMode, setIsEditMode } = useEditMode()

  // Add body class for consumer deck (for print CSS)
  useEffect(() => {
    if (DECK_MODE === 'consumer') {
      document.body.classList.add('consumer-deck-mode');
    } else {
      document.body.classList.remove('consumer-deck-mode');
    }
    return () => document.body.classList.remove('consumer-deck-mode');
  }, [])

  // Debug logging for Edit Mode state
  useEffect(() => {
    console.log('Edit Mode State:', isEditMode)
  }, [isEditMode])

  // Debug logging for Export Dashboard state
  useEffect(() => {
    console.log('Export Dashboard State:', showExportDashboard)
  }, [showExportDashboard])

  // Named button handlers for better debugging
  const handleEditModeClick = () => {
    console.log('Edit Mode button clicked! Current state:', isEditMode)
    setIsEditMode(!isEditMode)
    console.log('Setting Edit Mode to:', !isEditMode)
  }

  const handleExportPDFClick = () => {
    console.log('Export PDF button clicked!')
    window.print()
  }

  const handleExportOptionsClick = () => {
    console.log('Export Options button clicked! Current state:', showExportDashboard)
    setShowExportDashboard(true)
    console.log('Setting Export Dashboard to: true')
  }

  // Check if static mode is enabled (for crisp screenshots)
  const isStaticMode = new URLSearchParams(window.location.search).get('static') === '1'

  // Helper function to navigate to a slide by updating hash
  const navigateToSlide = (slideIndex) => {
    const validIndex = Math.max(0, Math.min(slideIndex, slides.length - 1))
    window.location.hash = `/slide/${validIndex}`
  }

  // Hash-based navigation: sync URL hash with slide state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      
      // Handle both #/slide/N and #slide/N formats
      const match = hash.match(/#\/?slide\/(\d+)/)
      
      if (match) {
        const slideNum = parseInt(match[1], 10)
        // Validate slide number is within range
        if (slideNum >= 0 && slideNum < slides.length) {
          setCurrentSlide(slideNum)
          return
        }
      }
      
      // If no hash or invalid hash, only set default if we're on the root
      if (!hash || hash === '#' || hash === '#/') {
        setCurrentSlide(0)
        window.location.hash = '/slide/0'
      }
      // Otherwise keep current slide
    }
    
    // Handle initial load
    handleHashChange()
    
    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Preload adjacent slides for smoother transitions
  useEffect(() => {
    const slidesToPreload = new Set([currentSlide])
    if (currentSlide > 0) slidesToPreload.add(currentSlide - 1)
    if (currentSlide < slides.length - 1) slidesToPreload.add(currentSlide + 1)
    setPreloadedSlides(slidesToPreload)
  }, [currentSlide])

  // Get current section/act based on slide number
  const getSlideSection = (slideIndex) => {
    if (slideIndex <= 2) return 'Opening'
    if (slideIndex >= 3 && slideIndex <= 6) return 'Act 1: Problem'
    if (slideIndex >= 7 && slideIndex <= 10) return 'Act 2: Solution'
    if (slideIndex >= 11 && slideIndex <= 17) return 'Act 3: Deep Dive'
    if (slideIndex >= 18 && slideIndex <= 24) return 'Act 4: Proof'
    if (slideIndex >= 25 && slideIndex <= 52) return 'Act 5: Business'
    if (slideIndex >= 53 && slideIndex <= 62) return 'Act 6: GIFT City'
    if (slideIndex >= 63 && slideIndex <= 84) return 'Product Appendix'
    if (slideIndex >= 85) return 'Final Appendix'
    return ''
  }

  // Get act progress percentage
  const getActProgress = (slideIndex) => {
    if (slideIndex <= 6) return 20   // End of Act 1
    if (slideIndex <= 10) return 40  // End of Act 2
    if (slideIndex <= 17) return 60  // End of Act 3
    if (slideIndex <= 24) return 80  // End of Act 4
    if (slideIndex <= 62) return 90  // End of Act 6 (GIFT City)
    if (slideIndex <= 84) return 95  // End of Product Appendix
    return 100                       // Final Appendix
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      
      // Check for Ctrl/Cmd + P for PDF export
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault()
        setShowExportDashboard(true)
        return
      }
      
      if (e.key === 'ArrowLeft') {
        navigateToSlide(currentSlide - 1)
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        navigateToSlide(currentSlide + 1)
      } else if (e.key === 'Home') {
        navigateToSlide(0)
      } else if (e.key === 'End') {
        navigateToSlide(slides.length - 1)
      } else if (e.key === 't' || e.key === 'T') {
        setShowThumbnails(prev => !prev)
      } else if (e.key === 'e' || e.key === 'E') {
        console.log('E key pressed - toggling edit mode')
        setIsEditMode(prev => !prev)
      } else if (e.key === 'x' || e.key === 'X') {
        // Quick export shortcut
        setShowExportDashboard(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, slides.length])

  const slideTransitions = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4 }
    },
    slide: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    zoom: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  }

  // Use static transition (no animation) if static mode is enabled
  const currentTransition = isStaticMode 
    ? { initial: {}, animate: {}, exit: {}, transition: { duration: 0 } }
    : slideTransitions.zoom

  // Get the current slide component dynamically
  const CurrentSlideComponent = slides[currentSlide]?.component || slides[0].component
  
  // Props to pass to slides that need navigation
  const slideProps = {
    onNavigate: navigateToSlide
  }
  
  return (
      <div className="presentation">
      {/* Print view: All slides rendered - Hidden on screen, visible in print */}
      <div className="print-only-slides" style={{ display: 'none' }}>
        {slides.map((slide, index) => {
          const SlideComponent = slide.component
          return (
            <div key={index} className="print-slide">
              <SlideComponent {...slideProps} />
            </div>
          )
        })}
      </div>

      {/* Main Slide Viewport - Hidden during print */}
      <div className="screen-view">
        <SlideViewport>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              {...currentTransition}
              className="slide"
            >
              <CurrentSlideComponent {...slideProps} />
            </motion.div>
          </AnimatePresence>
        </SlideViewport>
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'rgba(0, 0, 0, 0)',  // Changed to transparent
        zIndex: 10000,
        pointerEvents: 'none'
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #14b8a6, #3b82f6, #a855f7)',
            transformOrigin: 'left',
            boxShadow: '0 0 10px rgba(20, 184, 166, 0.4)'  // Added glow effect
          }}
          animate={{ scaleX: (currentSlide + 1) / slides.length }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Progress Label and Act Navigation - Left side (hidden for consumer deck) */}
        {DECK_MODE !== 'consumer' && (
        <div style={{
          position: 'absolute',
          top: '8px',
          left: '20px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          pointerEvents: 'auto',
          zIndex: 10001
        }}>
          <div style={{
            fontSize: '0.8rem',
            color: '#94a3b8',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            padding: '4px 12px',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {getSlideSection(currentSlide)} • {getActProgress(currentSlide)}% Complete
          </div>

          <ActDropdown 
            currentSlide={currentSlide}
            onNavigate={navigateToSlide}
          />
        </div>
        )}

        {/* Navigation Controls - Right side (hidden for consumer deck) */}
        {DECK_MODE !== 'consumer' && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '20px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px)',
          padding: '6px 10px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          pointerEvents: 'auto',
          zIndex: 10001
        }}>
          {DECK_MODE !== 'consumer' && (
          <>
          <button 
            onClick={() => navigateToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentSlide === 0 ? '#4b5563' : '#14b8a6',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              fontSize: '1.2rem',
              padding: '4px 8px',
              transition: 'all 0.2s'
            }}
          >
            ←
          </button>
          
          <div style={{ 
            fontSize: '0.75rem', 
            color: '#94a3b8',
            minWidth: '50px',
            textAlign: 'center'
          }}>
            {currentSlide + 1} / {slides.length}
          </div>
          
          <button 
            onClick={() => navigateToSlide(currentSlide + 1)}
            disabled={currentSlide === slides.length - 1}
            style={{
              background: 'transparent',
              border: 'none',
              color: currentSlide === slides.length - 1 ? '#4b5563' : '#14b8a6',
              cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: '1.2rem',
              padding: '4px 8px',
              transition: 'all 0.2s'
            }}
          >
            →
          </button>
          </>
          )}
          
          {DECK_MODE !== 'consumer' && (
          <>
          <div style={{ 
            width: '1px', 
            height: '20px', 
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '0 4px'
          }}></div>
          
          <button
            onClick={handleEditModeClick}
            style={{
              position: 'relative',
              background: isEditMode ? 'rgba(34, 197, 94, 0.2)' : 'rgba(59, 130, 246, 0.15)',
              border: `1px solid ${isEditMode ? 'rgba(34, 197, 94, 0.4)' : 'rgba(59, 130, 246, 0.3)'}`,
              color: isEditMode ? '#86efac' : '#93c5fd',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              zIndex: 10002,
              pointerEvents: 'auto'
            }}
          >
            ✏️ {isEditMode ? 'Exit Edit' : 'Edit Mode'}
          </button>
          
          <button
            onClick={handleExportPDFClick}
            style={{
              position: 'relative',
              background: 'rgba(20, 184, 166, 0.15)',
              border: '1px solid rgba(20, 184, 166, 0.3)',
              color: '#5eead4',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              zIndex: 10002,
              pointerEvents: 'auto'
            }}
          >
            📄 Export PDF
          </button>
          </>
          )}
          
          {DECK_MODE !== 'consumer' && (
          <button
            onClick={handleExportOptionsClick}
            style={{
              position: 'relative',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              color: '#c084fc',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              zIndex: 10002,
              pointerEvents: 'auto'
            }}
          >
            ⚡ Export Options
          </button>
          )}
          
          {DECK_MODE !== 'consumer' && (
          <button
            onClick={() => {
              const slideUrl = `${window.location.origin}${window.location.pathname}#/slide/${currentSlide}`
              navigator.clipboard.writeText(slideUrl)
              console.log('Slide link copied!')
            }}
            style={{
              position: 'relative',
              background: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              color: '#86efac',
              cursor: 'pointer',
              fontSize: '0.7rem',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              zIndex: 10002,
              pointerEvents: 'auto'
            }}
          >
            🔗 Share
          </button>
          )}
        </div>
        )}
      </div>


      {/* Thumbnail Preview (Press T to toggle) */}
      {showThumbnails && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.95)',
            borderRadius: '12px',
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 150px)',
            gap: '10px',
            maxHeight: '70vh',
            overflowY: 'auto',
            zIndex: 999,
            backdropFilter: 'blur(20px)'
          }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigateToSlide(index)
                setShowThumbnails(false)
              }}
              style={{
                cursor: 'pointer',
                borderRadius: '8px',
                border: index === currentSlide ? '2px solid #14b8a6' : '1px solid rgba(255, 255, 255, 0.1)',
                padding: '8px',
                background: index === currentSlide ? 'rgba(20, 184, 166, 0.1)' : 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '4px' }}>
                Slide {index + 1}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {slide.title}
              </div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', marginTop: '4px' }}>
                {getSlideSection(index)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
      
      {/* Export Dashboard Modal */}
      <ExportDashboard
        isOpen={showExportDashboard}
        onClose={() => setShowExportDashboard(false)}
        slides={slides}
        currentSlide={currentSlide}
        navigateToSlide={navigateToSlide}
      />
      
      {/* Edit Mode Bar - Show when Edit Mode is active */}
      {isEditMode && <EditModeBar />}
    </div>
  )
}

// Main App component that provides EditModeContext
function App() {
  console.log('App component is rendering...')
  
  try {
    return (
      <EditModeProvider>
        <AppContent />
      </EditModeProvider>
    )
  } catch (error) {
    console.error('Error in App component:', error)
    return (
      <div style={{ padding: '20px', background: '#1a1a1a', color: '#ff6b6b' }}>
        <h1>Error in App Component</h1>
        <pre>{error.toString()}</pre>
        <pre>{error.stack}</pre>
      </div>
    )
  }
}

export default App
